import React from "react";
import TestimonialsData from "../../database/tesimonialData/Tesimonial.json";

const TestimonialLists = () => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {TestimonialsData.testimonials.map((element, index) => {
          return (
            <div key={index} className="testimonial-card">
              <img
                src={element.img}
                width="100"
                alt="This is an image."
                className="pt-3"
              />
              <p>{element.description}</p>
              <h3 className="pb-2 fw-bold">{element.name}</h3>
              <h6 className="fw-normal">{element.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialLists;
