import React from "react";

const Card = () => {
  return (
    <>
      <h2>Profile</h2>

      <div className="card">
        <img src="./src/components/componentsForBlog/img_avatar.png" alt="Avatar" className="profileImg"  />
        <div className="container">
          <h4>
            <b>Bidyut Sikder</b>
          </h4>
          <p>Web developer</p>
        </div>
      </div>
    </>
  );
};

export default Card;
