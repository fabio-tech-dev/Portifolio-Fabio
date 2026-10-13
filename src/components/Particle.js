import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener
      ? motionPreference.addEventListener("change", updateMotionPreference)
      : motionPreference.addListener(updateMotionPreference);

    return () => {
      motionPreference.removeEventListener
        ? motionPreference.removeEventListener("change", updateMotionPreference)
        : motionPreference.removeListener(updateMotionPreference);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 45,
        particles: {
          number: {
            value: 82,
            density: {
              enable: true,
              value_area: 1100,
            },
          },
          color: {
            value: ["#0AE7F7", "#129FD9", "#60A5FA"],
          },
          line_linked: {
            enable: true,
            distance: 145,
            color: "#0AE7F7",
            opacity: 0.16,
            width: 1,
          },
          move: {
            enable: !reducedMotion,
            direction: "none",
            random: true,
            straight: false,
            speed: 0.35,
            out_mode: "out",
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.55,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.12,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
            onhover: {
              enable: false,
            },
          },
        },
        retina_detect: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              fpsLimit: 30,
              particles: {
                number: {
                  value: 42,
                },
                line_linked: {
                  distance: 105,
                  opacity: 0.12,
                },
              },
            },
          },
        ],
      }}
    />
  );
}

export default Particle;
