import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="bo">
      <div className="bo2">
        <footer className="footer">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </section>

          <section >
            <div >
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h3 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>@Radiant
                  </h3>
                  <p>
                   Travel with us to Find Youself
                  </p>
                  <div className="heading-secondary">
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                      <img
                        src="https://seeklogo.com/images/R/radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                        width="80%"
                        style={{ height: "10%" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >
                  <h3 className="text-uppercase fw-bold mb-4">Contact</h3>
                  <p>
                    <i className="fas fa-home me-3"></i> India, Karnataka,
                    Manglore
                  </p>
                  <p>
                    {" "}
                    <i className="fas fa-envelope me-3"></i> Radiant@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" to="https://mdbootstrap.com/">
              RadiantTravels.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
