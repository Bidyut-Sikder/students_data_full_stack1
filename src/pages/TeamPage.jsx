import React from "react";
import BGComponent from "../components/commonComponents/BGComponent";
import TeamList from "../components/teamComponents/TeamList";
import SubscriptionForm from "../components/commonComponents/SubscriptionForm";
import FooterArea from "../components/commonComponents/FooterArea";
import Frame from "../components/commonComponents/Frame";

const TeamPage = () => {
    const data = {
        boldTitle: "Our Team Member ",
        headerTitle: (
          <>
           Check our awesome team 
            <br />
            members
          </>
        )
      };
  return (
    <>
      <div className="container">
        <BGComponent page={"Team"}/>
        <Frame data={data} />
        <TeamList />
        <SubscriptionForm />
      </div>
      <FooterArea />
    </>
  );
};

export default TeamPage;
