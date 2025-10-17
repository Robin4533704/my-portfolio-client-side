import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/core";

const TestParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" init={particlesInit} options={{}} />;
};

export default TestParticles;
