import React from "react"
import { Link } from "gatsby"
import { GiLaurels } from "react-icons/gi"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="our story" />
            <h4 className="quote">Et Tu, Cafe?</h4>
            <GiLaurels
              size="2.5rem"
              className="text-gold"
              style={{ marginBottom: "3rem" }}
            />
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique numquam distinctio obcaecati adipisci excepturi,
              consequatur saepe expedita quae molestiae vero, eaque ullam quidem
              aut ratione provident assumenda a. Quis, perspiciatis.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-gold">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
