import React from 'react'
import { Link } from 'react-router-dom'

import welcome from '../../media/landing-img-1.svg'

const LandingTop = () => (
  <div className="landing-top-bg px-3">
    <div className="card mx-auto bg-transparent border-0">
      <div className="row m-auto">
        <div className="col-md-8 align-items-center d-flex justify-content-center">
          <div className="card-body">
            <h2 className="heading">Heading</h2>
            <h4 className="card-title">Heading Text will be here</h4>
            <p className="card-text">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio,
              vestibulum.
            </p>
            <p className="card-text">
              <small className="font-weight-light">
                Application for both developers and employers
              </small>
            </p>
            <div className="pt-3">
              <Link
                to="/register"
                className="btn btn-outline-light btn-lg mr-4 w-25 py-2 p-0" // width & padding is improvised to avoid text breakage in btn.
              >
                Register
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-light btn-lg w-25"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mx-auto hide-md">
          <img src={welcome} alt="landing-img" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
)

export default LandingTop
