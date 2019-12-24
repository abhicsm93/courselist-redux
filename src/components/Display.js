import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { enquiryList } from "../actions";

class Display extends Component {
  componentDidMount() {
    this.props.dispatch(enquiryList());
  }

  render() {
    let renderList = [];
    if (this.props.enquiryData.enquiry !== undefined) {
      renderList = this.props.enquiryData.enquiry.map(item => {
        return (
          <h6 key={item.id}>
            {item.id}: {item.enquiry}
          </h6>
        );
      });
    }

    return <div className="jumbotron">{renderList}</div>;
  }
}

function mapStateToProps(state) {
  return {
    enquiryData: state.enquiries
  };
}

Display.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Display);
