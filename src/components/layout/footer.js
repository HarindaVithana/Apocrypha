import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="page-footer font-small special-color-dark pt-4 mt-4">
          <div className="container">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a
                  href="#!"
                  className="btn btn-social-icon btn-lg btn-facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="btn btn-social-icon btn-lg btn-twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#!"
                  className="btn btn-social-icon btn-lg btn-linkedin"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>

          <div
            className="footer-copyright text-center py-3"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            © 2019 Copyright
            <br />
            <h3>
              <a
                style={{ color: "#ffffff", textDecoration: "none" }}
                href="https://mdbootstrap.com/education/bootstrap/"
              >
                Apocrypha.com
              </a>
            </h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
