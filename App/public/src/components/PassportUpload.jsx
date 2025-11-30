import React, { useState, useEffect } from 'react';
import { auth, storage, rtdb } from '../firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set, get } from 'firebase/database';

// Component allows uploading a passport file (image/pdf) and stores metadata + download URL in Realtime DB.
// Once uploaded, parent can mark the Passport card as "Added" via onUploaded(true).
function PassportUpload({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadURL, setDownloadURL] = useState('');

  useEffect(() => {
    const loadExisting = async () => {
      if (!auth.currentUser) return;
      const snap = await get(dbRef(rtdb, `passports/${auth.currentUser.uid}`));
      if (snap.exists()) {
        const data = snap.val();
        if (data.downloadURL) setDownloadURL(data.downloadURL);
        onUploaded && onUploaded(true);
      }
    };
    loadExisting();
  }, [onUploaded]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleUpload = async () => {
    if (!auth.currentUser) {
      setError('You must be signed in to upload');
      return;
    }
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const ext = file.name.split('.').pop().toLowerCase();
      const allowed = ['jpg','jpeg','png','pdf'];
      if (!allowed.includes(ext)) {
        throw new Error('Unsupported file type. Use JPG, PNG, or PDF');
      }
      const path = `passports/${auth.currentUser.uid}/passport.${ext}`;
      const sRef = storageRef(storage, path);
      await uploadBytes(sRef, file, { contentType: file.type });
      const url = await getDownloadURL(sRef);
      await set(dbRef(rtdb, `passports/${auth.currentUser.uid}`), {
        downloadURL: url,
        uploadedAt: Date.now(),
        name: file.name,
        type: file.type,
        size: file.size
      });
      setDownloadURL(url);
      onUploaded && onUploaded(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="passport-upload-box">
      <h3 className="passport-upload-title">Passport Upload</h3>
      <p className="passport-upload-help">Upload a clear, valid copy of your passport (image or PDF).</p>

      <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} disabled={uploading} />
        <button onClick={handleUpload} disabled={!file || uploading} className="passport-upload-btn">
          {uploading ? 'Uploading...' : 'Upload Passport'}
        </button>
      </div>

      {downloadURL && (
        <div className="passport-download-row">
          <a href={downloadURL} target="_blank" rel="noopener noreferrer" className="passport-download-link">View Uploaded Passport</a>
        </div>
      )}
      {error && <div className="passport-error" role="alert">{error}</div>}
    </div>
  );
}

export default PassportUpload;
