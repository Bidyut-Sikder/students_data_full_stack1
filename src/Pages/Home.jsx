import React, {Component} from "react";
import DemoCarousel from "../components/componentsForHome/Carousel";
import Calendar from "react-calendar";
import Calculator from "../components/componentsForHome/Calculator";
import HomeHeader from "../components/componentsForHome/HomeHeader";

class Home extends Component {
  
  render() {
    return (
      <div>
        <HomeHeader />
        <DemoCarousel />
        <Calendar />
       <Calculator />
      



      </div>
    );
  }
}

export default Home;
