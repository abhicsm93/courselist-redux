import React from "react";
import { Link } from "react-router-dom";

const PostView = props => {
  const renderTopic = ({ topicData }) => {
    if (topicData) {
      console.log(topicData);
      return topicData.map(item => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <Link className="btn btn-info" to={`/form`}>
              Enquire
            </Link>
          </div>
        );
      });
    }
  };
  return <div>{renderTopic(props)}</div>;
};

export default PostView;
