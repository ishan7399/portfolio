import React, { useState } from "react";

const Child = (props) => {
  const [style, setStyle] = useState();

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${props.percentage}`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <>
      <div className="child-container">
        <div className="icon-container">{props.icon}</div>
        <div className="skillbar-container">
          <h1>{props.skill}</h1>
          <div className="skillbar">
            <div className="progress" style={style}></div>
          </div>
        </div>
        <div className="percentage">
          <span>{props.percentage}</span>
        </div>
      </div>
    </>
  );
};

export default Child;
