import JobCard from "./JobCard";
import { jobs } from "../jobsData";

export default function JobList() {
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}