import React from "react"
import Title from "../Globals/Title"
import "../layout.css"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-lg-8 col-sm-8 col-8 col-md-8 mx-auto">
          <form
            action="https://formspree.io/giulio8686@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
                required
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
                required
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">comments</label>
              <textarea
                name="comments"
                id="comments"
                className="form-control"
                rows="5"
                placeholder="comment here..."
                required
              ></textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-gold btn-block text-capitalize mb-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
