import React, { Component } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import first from "../images/first.jpg";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <img src={first} alt="Snow" className="img" />
            <div className="centered">
              <h2 className="display-2">Apocrypha</h2>
              <h4>The Unlimited Realm of Knowledge!</h4>
            </div>
          </div>
          <div class="container contact-form">
            <form method="post">
              <h3>Got a problem? Drop us a Message!</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="txtName"
                      class="form-control"
                      placeholder="Your Name"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="txtEmail"
                      class="form-control"
                      placeholder="Your Email"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="txtPhone"
                      class="form-control"
                      placeholder="Your Phone Number"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      name="btnSubmit"
                      class="btnContact"
                      value="Send Message"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea
                      name="txtMsg"
                      class="form-control"
                      placeholder="Your Message"
                      class="txtarea"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
