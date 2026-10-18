import React from 'react'
import FlyingButton from '../../components/FlyingButton/FlyingButton'

function About() {
  return (
    <div>
      <FlyingButton
        theme="dark"
        size="medium"
        altitude={170}
        hoverTime={2.4}
        jets={2}
        thrusters
        trigger="hover"
        carryCursor
        smoke={1}
        turbulence={1}
        wobble={1}
        ramp={false}
        thrustColor="#8ec5ff"
        smokeColor="#eef1f6"
        onClick={() => console.log("Lift off")}
      >
        Take off
      </FlyingButton>
    </div>
  );
}

export default About
