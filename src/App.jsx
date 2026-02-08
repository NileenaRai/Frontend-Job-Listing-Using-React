import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Routes>
          {/* Main Page */}
          <Route path="/" element={
            <>
              <h1>Available Jobs</h1>
              <SearchBar />
              <JobList />
            </>
          } />

          {/* Details Page */}
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;