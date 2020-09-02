import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div className="mission" key={mission.mission_id} data-testId = "mission">
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

//if data is passed into this app is it rendered the correct way?
//MissionsList.test.js

export default MissionsList;
