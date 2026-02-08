const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="card-header">
        <img src={job.logo} alt={job.company} className="company-logo" />
        <span className="company-name">{job.company}</span>
      </div>
      <h3 className="job-title">{job.title}</h3>
      <p className="job-location">{job.location}</p>
      <div className="job-type">{job.type}</div>
      <button className="view-btn">View Details</button>
    </div>
  );
};

export default JobCard;