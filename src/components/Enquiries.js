import React, { Component } from "react";
const url = "http://localhost:8900/enquiries";
class Enquiries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const renderList = this.state.data.map(item => {
      return (
        <h6 key={item.id}>
          {item.id}: {item.enquiry}
        </h6>
      );
    });

    return <div className="jumbotron">{renderList}</div>;
  }
}

export default Enquiries;
