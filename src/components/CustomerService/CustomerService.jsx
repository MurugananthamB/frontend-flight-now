import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
// import "./customerservice.css";

export default class App extends React.Component {
  moveToCusPage = (e) => {
    e.preventDefault();
    // Capture form data if needed
    window.location.href = "/ServicePage";
  };

  render() {
    return (
      <div className="row">
        <div className="column3">
          <div className="seatInfo">
            <p className="new">PASSENGER AIRLINES</p>
            <center>
              <div className="cen">
                <form onSubmit={this.moveToCusPage}>
                  <br />
                  <label className="t">Name: &nbsp;&nbsp;&nbsp;</label>
                  <input type="text" name="name" id="d" required />
                  <br />
                  <label className="t">Email-Id: &nbsp;&nbsp;&nbsp;</label>
                  <input type="email" name="usr_email" id="d" required />
                  <br />
                  <br />
                  <a href="#" onClick={(e) => this.moveToCusPage(e)}>
                    <label className="bo">FEEDBACK</label>
                  </a>
                  <textarea name="message"></textarea>
                  <br />
                  <br />
                  <p className="ne">RATING</p>
                  <center>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <div
                        className="form-check form-check-inline"
                        key={rating}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="rating"
                          id={rating}
                          value={rating}
                        />
                        <label className="form-check-label" htmlFor={rating}>
                          {rating}
                        </label>
                      </div>
                    ))}
                  </center>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-danger">
                    Clear
                  </button>
                </form>
              </div>
              <br />
              <br />
              <p className="te">EMAIL: PASSENGER_airlines@gmail.com</p>
              <p className="te">CONTACT NUMBER: 9789909345</p>
              <p className="te">ADDRESS: 91-Z/19, Chennai, 603203</p>
              <br />
              <p className="bo">If you need any information send mail</p>
              <a href="mailto:Passengar13@gmail.com" className="bo">
                Report via mail
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
