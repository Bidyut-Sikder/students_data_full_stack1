import React from "react";
import ProjectsData from "../../database/projectData/Projects.json";

const AllProjects = () => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {ProjectsData.projects.map((element, index) => {
          return (
            <div key={index} className="project-card">
              <img
                src={element.projectImg}
                width="500"
                alt="This is an image."
              />
              <h4 className="pt-4 fw-bold ">{element.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
