import React from 'react'
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent'

console.log(data)

function App() {
  return (
    <div className="App">
      <JobBoardComponent />
    </div>
  )
}

export default App
