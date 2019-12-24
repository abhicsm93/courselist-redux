import React, { Component } from "react";
import { updateEnquiry } from "../actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

    this.props.dispatch(updateEnquiry(data));
    alert("Enquiry Submitted Successfully");
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

function mapStateToProps(state) {
  return { enquiryData: state.enquiries };
}

Forms.protoTypes = {
  dispatch: PropTypes.func
};
export default connect(mapStateToProps)(Forms);
