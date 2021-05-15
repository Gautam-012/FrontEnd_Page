import React from 'react';

const About = props => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <div className="aboutContainer">
          <h2>{props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            orci ac auctor augue mauris augue neque. Turpis egestas pretium
            aenean pharetra magna ac placerat vestibulum lectus. Placerat duis
            ultricies lacus sed turpis.
          </p>
          <button className="aboutBtn">{props.button}</button>
        </div>
      </div>
    </div>
  );
};
export default About;
