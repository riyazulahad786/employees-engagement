import {} from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  text-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-dark fw-bold fs-3" href="/home">
          KudoSpot
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark fs-4 fw-bold" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-4 fw-bold" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-4 fw-bold" href="#">
                 Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
