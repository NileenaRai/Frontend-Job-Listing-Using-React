import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <img src={job.logo} alt="logo" className="company-logo" />
        <span className="company-name">{job.company}</span>
      </div>
      <h3 className="job-title">{job.title}</h3>
      <p className="job-location">{job.location}</p>
      <div className="job-type">{job.type}</div>
      {/* This Link takes us to /job/1, /job/2, etc. */}
      <Link to={`/job/${job.id}`} className="view-btn" style={{textDecoration: 'none', textAlign: 'center'}}>
        View Details
      </Link>
    </div>
  );
}