import React from "react";
import SubscriptionForm from "../components/commonComponents/SubscriptionForm";
import FooterArea from "../components/commonComponents/FooterArea";
import BGComponent from "../components/commonComponents/BGComponent";
import AllProjects from "../components/projectComponents/AllProjects";
import Frame from "../components/commonComponents/Frame";

const ProjectPage = () => {
  const data = {
    boldTitle: "Our All Services ",
    headerTitle: (
      <>
       Better Agency/SEO Solution At 
        <br />
        Your Fingertips
      </>
    )
  };
  return (
    <>
      <div className="container">
        
        <BGComponent page={'All Project'} />
        <Frame data={data} />
        <AllProjects />
        <SubscriptionForm />
      </div>
      <FooterArea />
    </>
  );
};

export default ProjectPage;
