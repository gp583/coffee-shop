import React from "react"
import { Link } from "gatsby"
import { GiLaurels } from "react-icons/gi"
import Title from "../Globals/Title"
import "../layout.css"

const AboutInfo = () => {
  return (
    <section className="py-5 about">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white text-center">
            <Title title="what we do" />
            <GiLaurels
              size="2.5rem"
              className="text-gold"
              style={{ marginBottom: "3rem" }}
            />
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quo
              officia accusamus sed ea, eveniet dignissimos ex reiciendis,
              dolores repellendus illo! Provident architecto sapiente
              necessitatibus quod, tenetur fuga illum minus voluptas ea numquam,
              aspernatur vel amet commodi! Architecto, soluta eos.
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

export default AboutInfo
