import React from "react";

const Frame = ({data}) => {

  return (
    <div id="frame">
      <p>{data.boldTitle}</p>

      <h2 style={{fontWeight: "600"}}>{data.headerTitle}</h2>
    </div>
  );
};

export default Frame;
