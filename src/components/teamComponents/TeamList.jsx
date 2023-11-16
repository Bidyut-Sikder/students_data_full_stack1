import React from 'react';
import TeamData from '../../database/teamData/Team.json'

const TeamList = () => {
    return (
        <div id="teamList" className="pt-4">
        <div className="team-description p-5">
          <h6 className="pb-2">Our Team Member</h6>
          <h4>
            Check our awesome team <br />
            members
          </h4>
        </div>
        <div id="teamMember" className="d-flex justify-content-center">
          
          
{TeamData.data.map((element,index)=>{
  return   <div key={index} className="card m-2" style={{width: "17rem"}}>
  <img
    src={element.teamImg}
    className="card-img-top"
    alt="..."
  />
  <div className="card-body">
    <h2>{element.author}</h2>
  </div>
</div>
})

}

        </div>
      </div>
    );
};

export default TeamList;