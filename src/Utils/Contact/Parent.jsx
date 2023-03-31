import React from "react";
import Child from "./Child";
import ContactData from "./Contact.Data";

const Parent = () => {
  return (
    <>
    <div className="contact-parent-container">
      {ContactData.map((val , index) => {
        return <Child 
        key={index} 
        icon={val.icon}
         link={val.link} 
         />;
      })}
      </div>
    </>
  );
};

export default Parent;
