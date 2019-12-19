import React from "react"
import "../../components/layout.css"

export default function Title({ title }) {
  return (
    <div className="row mb-5">
      <div className="col text-center">
        <h1 className="sub-title">{title}</h1>
      </div>
    </div>
  )
}
