import React, { Component } from "react";

const url = "http://localhost:8900/enquiries";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  handleChange(e) {
    this.setState({ data: e.target.value });
  }
  addToDB() {
    let data = {
      enquiry: this.state.data
    };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Enquiry</h2>
        <label>Details:</label>
        <br />
        <textarea
          wrap="hard"
          style={{ height: "10rem", width: "40rem", marginBottom: "1rem" }}
          onChange={this.handleChange.bind(this)}
        ></textarea>
        <br />
        <button className="btn btn-success" onClick={this.addToDB.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

export default Forms;
