import React from "react";
import HomeData from "../../database/homeData/Home.json";
// /home/bidyutsikder/Desktop/react_assignment (copy)/src/images/homeImages/Mask.png

import image from "../../images/homeImages/Mask.png"

const Feature = () => {
  return (
    <div id="feature-project">
      <div id="frame">
        <p>Featured Project</p>
        <h4>We provide the Perfect Solution to your business growth</h4>
      </div>

      <div id="projects" className="d-flex justify-content-center">
        <div>
          <img className="featureImg" src={image} alt="" />
          <p>App Design-June 20,2022</p>
          <h3>App Design</h3>
        </div>

        <div>
          <div className="d-flex justify-content-around flex-wrap p-2">
      




{HomeData.featureData.map((element,index)=>{
  return <div key={index}>
  <img
    src={element.imgSrc}
    className="p-2 featureLittle"
    alt=""
  />
  <p>{element.date}</p>
  <h5>{element.cardTitle}</h5>
</div>
})}












     

{/*       

          <div>
              <img
                src="./images/Mask (1).png"
                className="p-2 featureLittle"
                alt=""
              />
              <p>App Design - June 20,2022</p>
              <h5>Redesign channel website landng page</h5>
            </div>

            <div>
              <img
                src="./images/Mask (2).png"
                className="p-2 featureLittle"
                alt=""
              />
              <p>App Design - June 20,2022</p>
              <h5>Redesign channel website landng page</h5>
            </div>

          </div>
          <div className="d-flex justify-content-between p-2">


            <div>
              <img
                src="./images/Mask (3).png"
                className="p-2 featureLittle"
                alt=""
              />
              <p>App Design - June 20,2022</p>
              <h5>Redesign channel website landng page</h5>
            </div>
            <div>
              <img
                src="./images/Mask (4).png"
                className="p-2 featureLittle"
                alt=""
              />
              <p>App Design - June 20,2022</p>
              <h5>Redesign channel website landng page</h5>
            </div> */}
          
          
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Feature;
