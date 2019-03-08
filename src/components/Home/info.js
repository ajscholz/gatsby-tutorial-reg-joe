import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={`Our Story`} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              non voluptates at perferendis officia voluptatem est ipsa,
              voluptatum earum nobis facere harum et vel maiores provident nisi
              nesciunt adipisci amet fuga qui aspernatur architecto. Vero
              fugiat, unde, nihil eum blanditiis odit nostrum quia ipsa, beatae
              sunt enim aliquam atque? Placeat!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default info
