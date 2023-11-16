import React from 'react';
import HomeData from "../../database/homeData/Home.json";

const StatList = () => {
    return (
        <div id="stat-list">
        <div id="groups">
          <div id="works" className="d-flex justify-content-center">
           
           {
            HomeData.statList.map((element,index)=>{
              return <div key={index} className="list-item m-3" style={{width: "18rem"}}>
              <img
                className="list-icon"
                src={element.imgSrc}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title pt-3">{element.cardTitle}</h5>
                <p className="card-text pb-3">{element.cardDescription}</p>
              </div>
            </div>
            })
           }

        

          </div>
        </div>
      </div>
    );
};

export default StatList;