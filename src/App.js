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
    if (filters.includes(tag)) return
    setFilters([...filters, tag])
  }
  const filteredJobs = jobs.filter(filterFn)

  function handleFilterClick(passedFilter) {
    setFilters(filters.filter((f) => f !== passedFilter))
  }

  function handleClearFilter() {
    setFilters([])
  }

  return (
    <div className="relative font-leagueSpartan  gap-20 flex flex-col items-center pb-20">
      <header className="w-full h-full bg-header flex items-center justify-center">
        <div className="bg-desaturatedDarkCyan h-fit w-fit">
          <img
            className="bg-darkCyan"
            alt="Header"
            src="/images/bg-header-desktop.svg"
          />
        </div>
      </header>
      <div className="w-[1120px] flex flex-col gap-5">
        {filters.length > 0 && (
          <div className="absolute top-[122.5px] px-11 py-5 flex w-[1120px] bg-white shadow-xl shadow-shadow h-[68px]  rounded-md">
            <div className="flex w-full h-full gap-4">
              {filters.map((filter, index) => (
                <div
                  key={index}
                  className="bg-ftLightGrayishCyan rounded-[3px] flex items-center"
                >
                  <span className=" font-semibold text-base text-desaturatedDarkCyan rounded px-2 pt-[4px] pb-[2px]  ">
                    {filter}
                  </span>
                  <button
                    className="hover:bg-slate800 bg-desaturatedDarkCyan h-full w-8 rounded-r-[3px] flex items-center justify-center cursor-pointer"
                    onClick={() => handleFilterClick(filter)}
                  >
                    <img alt="remove" src="/images/icon-remove.svg" />
                  </button>
                </div>
              ))}
            </div>
            <button
              className="text-slate300 hover:text-desaturatedDarkCyan hover:underline text-base font-semibold"
              onClick={() => {
                handleClearFilter()
              }}
            >
              Clear
            </button>
          </div>
        )}

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
      <footer>
        💖 Created by OSHIN (Ganjanapas Phothong) & anonymous man 💖
      </footer>
    </div>
  )
}

export default App
