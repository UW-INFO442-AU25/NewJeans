import React from "react";
import JobDashboard from "./components/JobDashboard"; // Make sure this path is correct

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Hello, NewJeans!</h1>
      <p>Your React app is running.</p>
      
      {/* Add the Job Application Tracker */}
      <JobDashboard />
    </div>
  );
}

export default App;