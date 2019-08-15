import React, { Component } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "bootstrap/dist/css/bootstrap.css";

class buy extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="width">
          <style>
            {
              "\
                  .width{\
                          padding-left: 50px;\
                          padding-right: 50px;\
                        }\
                  "
            }
          </style>

          <div>
            <style />
            <h1>Buy Books</h1>
          </div>
          <div className="border border-primary">
            <table>
              <tr>
                <td>
                  <div className="width">
                    <img src="#" class="img-fluid" alt="Responsive image" />
                  </div>
                </td>
                <td>
                  <h3>Title</h3>
                  <h4>Author</h4>
                  <h5>ISBN</h5>
                  <p>Price</p>
                  <p>Contact</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default buy;
