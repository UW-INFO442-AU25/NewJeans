import React, { useEffect, useState, useCallback } from 'react';
import { rtdb, auth } from '../firebase';
import { ref, onValue, off, push, set, update, remove } from 'firebase/database';
import JobCard from './JobCard';

// A lightweight real-time job list backed by Firebase Realtime Database.
// Path structure assumed: jobs/{jobId} => { title, company, location, employmentType, salary, visaTypes: [], createdAt }
// You can extend this easily with more fields.
function RealtimeJobList({ onNavigateToJobDescription, savedJobIds = [], onToggleSave = () => {}, user = null }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');

  useEffect(() => {
    const jobsRef = ref(rtdb, 'jobs');
    const listener = onValue(jobsRef, (snap) => {
      const val = snap.val();
      if (!val) {
        setJobs([]);
        setLoading(false);
        return;
      }
      const list = Object.entries(val).map(([id, obj]) => ({ id, ...obj })).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setJobs(list);
      setLoading(false);
    }, (e) => {
      setError(e.message);
      setLoading(false);
    });
    return () => off(jobsRef); // cleanup
  }, []);

  const addJob = useCallback(async () => {
    if (!auth.currentUser) {
      alert('Sign in required to add jobs');
      return;
    }
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return;
    const jobsRef = ref(rtdb, 'jobs');
    const newRef = push(jobsRef);
    const payload = {
      title: trimmedTitle,
      company: newCompany.trim() || 'Unknown Company',
      location: 'Remote',
      employmentType: 'Internship',
      visaTypes: ['H-1B', 'OPT'],
      salary: '$70,000',
      createdAt: Date.now(),
      createdBy: auth.currentUser.uid,
    };
    await set(newRef, payload);
    setNewTitle('');
    setNewCompany('');
  }, [newTitle, newCompany]);

  const quickUpdateTitle = async (id, title) => {
    await update(ref(rtdb, `jobs/${id}`), { title });
  };

  const deleteJob = async (id) => {
    if (!window.confirm('Delete this job?')) return;
    await remove(ref(rtdb, `jobs/${id}`));
  };

  if (loading) return <div style={{ padding: 24 }}>Loading real-time jobs...</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>Error: {error}</div>;

  return (
    <div className="realtime-jobs-wrapper">
      <h2 style={{ margin: '32px 0 16px 0' }}>Live Jobs (Realtime DB)</h2>

      {auth.currentUser ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
          <input
            placeholder="Job title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc' }}
          />
          <input
            placeholder="Company"
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc' }}
          />
          <button onClick={addJob} style={{ padding: '8px 16px', borderRadius: 6, background: '#5384A4', color: '#fff', border: 'none' }}>Add Job</button>
        </div>
      ) : (
        <div style={{ marginBottom: 24, fontSize: 14, color: '#555' }}>Sign in to add real-time jobs.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {jobs.length === 0 && <div style={{ padding: 12, color: '#777' }}>No jobs in realtime database yet.</div>}
        {jobs.map((job) => (
          <div key={job.id} style={{ position: 'relative' }}>
            <JobCard
              job={job}
              onClick={() => onNavigateToJobDescription && onNavigateToJobDescription(job.id)}
              isSaved={savedJobIds.includes(job.id)}
              onToggleSave={onToggleSave}
            />
            {auth.currentUser && auth.currentUser.uid === job.createdBy && (
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <input
                  defaultValue={job.title}
                  onBlur={(e) => quickUpdateTitle(job.id, e.target.value.trim() || job.title)}
                  style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #ccc', flex: 1 }}
                />
                <button onClick={() => deleteJob(job.id)} style={{ padding: '6px 10px', borderRadius: 6, background: '#B72222', color: '#fff', border: 'none' }}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealtimeJobList;
