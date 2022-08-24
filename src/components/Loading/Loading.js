import React from 'react'
import "./Loading.css";

function Loading() {
  return (
    <main className="status">
      <img
        className="loading"
        src="./status.png"
        alt="Loading"
      />
    </main>
  )
}

export default Loading