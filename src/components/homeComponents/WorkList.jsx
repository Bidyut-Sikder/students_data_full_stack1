import React from "react";
import HomeData from "../../database/homeData/Home.json";

const WorkList = () => {

  return (
    <div id="work-list">
      <div id="works" className="d-flex justify-content-center">
        {HomeData.workList.map((element, index) => {
          return (
            <div key={index} style={{width: "18rem"}}>
              <img
                className="works-icon"
                src={element.imgSrc}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{element.cardTitle}</h5>
                <p className="card-text">{element.cardDescription}</p>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default WorkList;
