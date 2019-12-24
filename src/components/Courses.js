import React from "react";
import CourseView from "./CourseView";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { courseList } from "../actions";

class Courses extends React.Component {
  componentDidMount() {
    this.props.dispatch(courseList());
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-body">
            <div className="jumbotron">
              <CourseView courseData={this.props.courseData.course} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.courses);
  return {
    courseData: state.courses
  };
}
Courses.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Courses);
