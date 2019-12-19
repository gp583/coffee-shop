import React from "react"
import "../layout.css"

export default function Title({ title }) {
  return (
    <div className="row mb-5">
      <div className="col text-center">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
}
