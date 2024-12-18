import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 d-flex align-items-center">
            <h5 className="fw-bold">Tag ICT</h5>
          </div>

          {/* Center Column */}
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">PRODUCTS</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white text-decoration-none">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-md-4 text-end">
            <h5 className="fw-bold">CONTACT</h5>
            <p>
              <i className="fas fa-envelope me-2"></i>mohsen@ict-bh.tech
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>+973 39970100
            </p>
            <p>
              <i className="fas fa-home me-2"></i>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <hr className="border-secondary" />
          <p className="mb-0">&copy; 2024 Made by</p>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a
              href="https://github.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://facebook.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
