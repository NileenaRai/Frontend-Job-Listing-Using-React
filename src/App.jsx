import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';

function App() {
  return (
    <div className="page-wrapper">
      <h1>Available Jobs</h1>
      <SearchBar />
      <JobList />
    </div>
  );
}

export default App;