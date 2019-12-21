import React from "react";
import CourseView from "./CourseView";

const url = "http://localhost:8900/courses";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: ""
    };
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(data => this.setState({ topics: data }));
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-body">
            <div className="jumbotron">
              {console.log(this.state.topics)}
              <CourseView topicData={this.state.topics} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
