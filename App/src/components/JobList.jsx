import React from "react";

export default function JobList({ jobs }) {
  return (
    <div>
      {jobs.length === 0 && <p>No jobs added yet!</p>}
      {jobs.map((job, index) => (
        <div key={index} className="job-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{job.title} @ {job.company}</h3>
          <p>Status: {job.status}</p>
          <p>Deadline: {job.deadline}</p>
          {job.url && <p><a href={job.url} target="_blank" rel="noopener noreferrer">View Posting</a></p>}
          {job.notes && <p>Notes: {job.notes}</p>}
        </div>
      ))}
    </div>
  );
}
