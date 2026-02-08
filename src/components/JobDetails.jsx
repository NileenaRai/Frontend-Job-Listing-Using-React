import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../jobsData";

export default function JobDetails() {
  const { id } = useParams(); // Gets the ID from the URL
  const navigate = useNavigate(); // For the "Back" button
  
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <h2>Job not found!</h2>;
  
  return (
    <div className="details-container">
      <h1 className="details-main-title">Job Details</h1>
      
      <div className="details-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="details-header">
          <img src={job.logo} alt="logo" className="details-logo" />
          <div>
            <h2 className="details-job-title">{job.title}</h2>
            <p className="details-company-link">{job.company}</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-row"><span>Job Category</span> <span>:</span> <strong>{job.category}</strong></div>
          <div className="info-row"><span>Job Level</span> <span>:</span> <strong>{job.level}</strong></div>
          <div className="info-row"><span>No. of Vacancy/s</span> <span>:</span> <strong>{job.vacancy}</strong></div>
          <div className="info-row"><span>Employment Type</span> <span>:</span> <strong>{job.type}</strong></div>
          <div className="info-row"><span>Job Location</span> <span>:</span> <strong>{job.location}</strong></div>
          <div className="info-row"><span>Offered Salary</span> <span>:</span> <strong>{job.salary}</strong></div>
          <div className="info-row"><span>Apply Before (Deadline)</span> <span>:</span> <strong>{job.deadline}</strong></div>
        </div>

        <div className="details-section">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        <div className="details-section">
          <h3>Skills Required</h3>
          <div className="skills-container">
            {job.skills?.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <button className="apply-now-btn" onClick={() => navigate('/success')}> Apply Now            
        </button>
      </div>
    </div>
  );
}