import React, { useState } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

export default function JobDashboard() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: jobs.length + 1 }]);
  };

  return (
    <div>
      <h2>Job Application Tracker</h2>
      <JobForm onAddJob={addJob} />
      <JobList jobs={jobs} />
    </div>
  );
}
