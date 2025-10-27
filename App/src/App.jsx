import React from "react";
import LandingPage from "./components/LandingPage";
import JobDashboard from "./components/JobDashboard";

function App() {
  return (
    <div>
      <LandingPage />
      <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <h1>Hello, NewJeans!</h1>
        <p>Your React app is running.</p>

        {/* Add the Job Application Tracker */}
        <JobDashboard />
      </div>
    </div>
  );
}

export default App;
