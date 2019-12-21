import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Courses from "./Courses";
import Forms from "./Forms";
import Enquiries from "./Enquiries";

class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">
                    Edureka
                  </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      {" "}
                      <Link to="/" style={{ marginRight: "1rem" }}>
                        Courses
                      </Link>
                      <Link to="/enquiries">Enquiries</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <Route exact path="/" component={Courses}></Route>
          <Route path="/form" component={Forms}></Route>
          <Route path="/enquiries" component={Enquiries}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
