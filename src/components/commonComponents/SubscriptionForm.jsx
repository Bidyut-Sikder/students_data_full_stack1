import React from 'react';

const SubscriptionForm = () => {
    return (
        <div id="subcribesection" className="text-center bg-white pt-5 pb-5">
        <div className="hi">
          <h6>SUBSCRIBE</h6>
          <h4>Subscribe to get the latest</h4>
          <h4>News About Us</h4>
          <p>
            Please drop your email below to get daily update about what we do
          </p>

          <div id="formHandle" className="d-flex justify-content-center">
            <input
              className="myInput"
              type="text"
              // value="Enter Your Email Adderss"
              placeholder='Enter Your Email Adderss'
              name=""
              id=""
            />
            <button id="button">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default SubscriptionForm;