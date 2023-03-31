import React from "react";

const Child = (props) => {
  return (
    <>
      <div className="social-media">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.icon}
        </a>
      </div>
    </>
  );
};

export default Child;
