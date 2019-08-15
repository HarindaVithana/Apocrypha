import React, { Component } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "bootstrap/dist/css/bootstrap.css";

class sell extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <style>
          {
            "\
          .width{\
            width:60%;\
            padding-left: 50px;\
          }\
          "
          }
        </style>
        <div className="width">
          <h1>Sell Books</h1>
          <form>
            <div className="form-group">
              <label>Book Title:</label>
              <input type="text" name="booktitle" className="form-control" />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input type="text" name="author" className="form-control" />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="grapefruit">Biology</option>
                <option value="lime">Physics</option>
                <option value="coconut">Chemistry</option>
                <option value="mango">Software</option>
                <option value="mango">Hardware</option>
                <option value="mango">Accounting</option>
                <option value="mango">Music</option>
                <option value="mango">Arts</option>
                <option value="mango">Litratue</option>
                <option value="mango">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>ISBN Number:</label>
              <input type="text" name="isbn" className="form-control" />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input type="text" name="price" className="form-control" />
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input type="text" name="contact" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default sell;
