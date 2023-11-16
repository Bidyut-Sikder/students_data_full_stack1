import React from 'react';

const FooterArea = () => {
    return (
        <div id="footer-area" className="d-flex justify-content-between">
        <div className="logo-area">
          <h1>WEB LOGO</h1>
          <p>
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <i> </i>
          <p id="copyright">Copyright Design Agency 2022</p>
        </div>

        <div >
          <h4>Quick Links</h4>
         
            <p>Services</p>
            <p>Portfopo</p>
            <p>About Us</p>
            <p>Contact Us</p>
         
        </div>
        <div>
          <h4>Address</h4>
          <p>Design Agency Head Office.</p>
          <p>Airport Road</p>
          <p>United Arab Emirate</p>
        </div>
      </div>
    );
};

export default FooterArea;