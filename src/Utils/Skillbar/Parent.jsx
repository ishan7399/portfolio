import React from "react";
import Child from "./Child";

import Items from "./Skillbar.Data";

function Parent() {
  return (
    <>
      <div className="parent-container">
        {Items.map((val, index) => {
          return [
            <>
              <Child
                key={index}
                icon={val.icon}
                skill={val.skill}
                percentage={val.percentage}
              />
            </>,
          ];
        })}
      </div>
    </>
  );
}

export default Parent;
