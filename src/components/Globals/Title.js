import React from "react"
import "../../components/layout.css"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="sub-title">{title}</h1>
      </div>
    </div>
  )
}
