import React, { useState, useEffect } from 'react'
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent'

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setJobs(data), [])

  function filterFn({ role, level, tools = [], languages = [] }) {
    if (filters.length === 0) {
      return true
    }

    const tags = [role, level, ...tools, ...languages]

    return tags.some((tag) => filters.includes(tag))
  }

  function handleTagClick(tag) {
    setFilters([...filters, tag])
  }
  const filteredJobs = jobs.filter(filterFn)

  return (
    <div className=" font-leagueSpartan bg-bgLightGrayishCyan flex flex-col items-center gap-20 pb-20">
      <header className="bg-desaturatedDarkCyan">
        <img
          className="bg-darkCyan"
          alt="Header"
          src="/images/bg-header-desktop.svg"
        />
      </header>
      <div className="w-[1120px] flex flex-col gap-5">
        <div className="bg-white h-16 rounded-sm">
          {filters.length > 0 &&
            filters.map((filter, index) => <span key={index}>{filter}</span>)}
        </div>
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App
