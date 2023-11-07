import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {

    render() {
        return (
          <div>
            <h2>A Basic Carousel</h2>
              <Carousel>
                <div>
                    <img src="./src/components/componentsForBlog/img_avatar.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="./src/components/componentsForBlog/img_avatar.png"/>

                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./src/components/componentsForBlog/img_avatar.png"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </div>
        );
    }
};

export default DemoCarousel;