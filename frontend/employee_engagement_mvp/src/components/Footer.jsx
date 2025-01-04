import React from 'react';

function Footer() {
  return (
    <footer className=" py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Employees platform is dedicated to enhancing workforce collaboration and engagement through innovative solutions.
            </p>
          </div>
          <div className="col-lg-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none text-dark">Employees Platform</a></li>
              <li><a href="#" className=" text-decoration-none text-dark">Leaderboard</a></li>
              <li><a href="#" className=" text-decoration-none text-dark">Engagement</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email: support@employeesplatform.com</p>
            <p>Phone: +1 234 567 890</p>
            <div>
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 Employees Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
