import React from "react";
import HeroImages from "../../database/homeData/Home.json";

const HeroList = () => {

  return (
    <div id="grad" className="pb-4">
      <div className="d-flex justify-content-between align-items-center pb-5">
        <div className="p-4">
          <h1 className="font-weight-bold fw-bold">
            Increase Your Customers Loyalty and Satisfaction
          </h1>
          <p>
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>

          <button
            type="button"
            style={{background: " #20b15a"}}
            className="btn text-white p-3 mt-4"
          >
            Get Started
          </button>
        </div>

        <div>
          <div className="d-flex flex-wrap justify-content-around p-2">
            {HeroImages.groupImages.map((element, index) => {
              return (
                <img key={index} src={element.src} className="p-3" alt="" />
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-flex bg-white pt-4 justify-content-around pb-4 pt-2">
        {HeroImages.customerImages.map((element, index) => {
          return <img key={index} className="pr-5" src={element.src} alt="" />;
        })}
      </div>
    </div>
  );
};

export default HeroList;
