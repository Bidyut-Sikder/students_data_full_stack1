import React from 'react';
import ServiceData from "../../database/serviceData/Service.json";

const AllServices = () => {
console.log(ServiceData)
    return (
        <div id="deign-view p-2">
        <div className="d-flex flex-wrap">

{
  ServiceData.services.map((element,index)=>{
    return    <div key={index} className="myDesign">
    <h2>{element.title}</h2>
    <p  style={{textAlign: "left", paddingLeft:"15px"}}>
   {element.description}
    </p>
    <div>
      
      <div className="d-flex justify-content-around p-2">
        <img
          src={element.img1}
          width="358px"
          alt=""
        />
        <img
          src={element.img2}
          width="153px"
          alt=""
        />
      </div>

      <div className="d-flex justify-content-around p-2">
        <img
         src={element.img3}
          width="257px"
          alt=""
        />
        <img
          src={element.img4}
          width="248px"
          alt=""
        />
      </div>

    </div>
  </div>

  })
}


{/* 
          <div className="myDesign">
            <h2>Build & Launch without problems</h2>
            <p  style={{textAlign: "left", paddingLeft:"15px"}}>
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div>
              
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2095.png"
                  width="358px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2096.png"
                  width="153px"
                  alt=""
                />
              </div>

              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2097.png"
                  width="257px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2098.png"
                  width="248px"
                  alt=""
                />
              </div>

            </div>
          </div>





          <div className="myDesign">
            <h2>Build & Launch without problems</h2>
            <p style={{textAlign: "left", paddingLeft:"15px"}}>
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2095 (1).png"
                  className="designImg"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2096 (1).png"
                  width="153px"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2097 (1).png"
                  width="257px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2098 (1).png"
                  width="248px"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="myDesign">
            <h2>Build & Launch without problems</h2>
            <p style={{textAlign: "left", paddingLeft:"15px"}}>
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2095.png"
                  width="358px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2096.png"
                  width="153px"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2097.png"
                  width="257px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2098.png"
                  width="248px"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="myDesign">
            <h2>Build & Launch without problems</h2>
            <p style={{textAlign: "left", paddingLeft:"15px"}}>
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2095.png"
                  width="358px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2096.png"
                  width="153px"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-around p-2">
                <img
                  src="./serviceImages/Rectangle 2097.png"
                  width="257px"
                  alt=""
                />
                <img
                  src="./serviceImages/Rectangle 2098.png"
                  width="248px"
                  alt=""
                />
              </div>
            </div>
          </div> */}


        </div>
      </div>
    );
};

export default AllServices;