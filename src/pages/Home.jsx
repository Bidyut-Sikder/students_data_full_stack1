import React from "react";
import HeroList from "../components/homeComponents/HeroList";
import WorkList from "../components/homeComponents/WorkList";
import StatList from "../components/homeComponents/StatList";
import Feature from "../components/homeComponents/Feature";
import SubscriptionForm from "../components/commonComponents/SubscriptionForm";
import FooterArea from "../components/commonComponents/FooterArea";
import Frame from "../components/commonComponents/Frame";

const Home = () => {
  const data = {
    boldTitle: "Work List ",
    headerTitle: (
      <>
      We provide the Perfect Solution 
        <br />
        to your business growth
      </>
    )
  };
  return (
    <>
      <div className="container">
        <HeroList />
        <Frame data={data} />
        <WorkList />
        <StatList />
        <Feature />
        <SubscriptionForm />
      </div>
      <FooterArea />
    </>
  );
};

export default Home;
