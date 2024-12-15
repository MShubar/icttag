import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              We are a leading company offering great products and services to
              our customers. Our mission is to provide quality and satisfaction.
            </p>
          </div>

          {/* Center Column */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex space-x-4">
              <a href="#!" className="text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 text-center">
          <div className="col-12">
            <p className="text-muted">
              &copy; 2024 ICT-BH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
