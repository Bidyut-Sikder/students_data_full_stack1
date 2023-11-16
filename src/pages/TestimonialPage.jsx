import React from "react";
import BGComponent from "../components/commonComponents/BGComponent";
import SubscriptionForm from "../components/commonComponents/SubscriptionForm";
import FooterArea from "../components/commonComponents/FooterArea";
import TestimonialLists from "../components/TestimonialComponents/TestimonialLists";
import Frame from "../components/commonComponents/Frame";

const TestimonialPage = () => {
  const data = {
    boldTitle: "Testimonial List ",
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
        <BGComponent page={"Tesimonial List"} />
        <Frame data={data} />
        <TestimonialLists />
        <SubscriptionForm />
      </div>
      <FooterArea />
    </>
  );
};

export default TestimonialPage;
