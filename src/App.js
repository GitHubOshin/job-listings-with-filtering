import React, { useState, useEffect } from 'react'
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => setJobs(data), [])

  return (
    <div className="font-leagueSpartan bg-bgLightGrayishCyan flex flex-col items-center gap-20">
      <header className="bg-desaturatedDarkCyan">
        <img
          className="bg-darkCyan"
          alt="Header"
          src="/images/bg-header-desktop.svg"
        />
      </header>
      <div className="w-[1120px] flex flex-col gap-5">
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
        )}
      </div>
    </div>
  )
}

export default App
