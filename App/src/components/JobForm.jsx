import React, { useState } from "react";

// Validation function
function validateJobInput(job) {
  const allowedStatus = ["Applied", "Interview", "Offer", "Rejected"];
  if (!job.title.trim() || !job.company.trim()) return false;
  if (!allowedStatus.includes(job.status)) return false;
  if (!job.deadline || isNaN(new Date(job.deadline))) return false;
  if (job.url && !/^https?:\/\/.+/.test(job.url)) return false;
  return true;
}

export default function JobForm({ onAddJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    status: "Applied",
    deadline: "",
    url: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateJobInput(form)) {
      onAddJob(form);
      setForm({ title: "", company: "", status: "Applied", deadline: "", url: "", notes: "" });
    } else {
      alert("Please fix invalid inputs!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" required />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="deadline" value={form.deadline} onChange={handleChange} required />
      <input name="url" value={form.url} onChange={handleChange} placeholder="Job Posting URL" />
      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
      <button type="submit">Add Job</button>
    </form>
  );
}
