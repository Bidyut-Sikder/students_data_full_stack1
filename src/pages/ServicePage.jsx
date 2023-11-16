import React from "react";
import BGComponent from "../components/commonComponents/BGComponent";
import AllServices from "../components/serviceComponents/AllServices";
import SubscriptionForm from "../components/commonComponents/SubscriptionForm";
import FooterArea from "../components/commonComponents/FooterArea";
import Frame from "../components/commonComponents/Frame";

const ServicePage = () => {
  const data = {
    boldTitle: "Our All Services ",
    headerTitle: (
      <>
       We Provide BestWeb design
        <br />
        services
      </>
    )
  };
  return (
    <>
      <div className="container">
        <BGComponent page={'Our Services'}/>
        <Frame  data={data}/>
        <AllServices />
        <SubscriptionForm />
      </div>
      <FooterArea />
    </>
  );
};

export default ServicePage;
