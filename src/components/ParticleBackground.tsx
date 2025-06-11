
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: ["#60A5FA", "#A78BFA"]
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.08,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.02,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.08,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 120,
              line_linked: {
                opacity: 0.15
              }
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent"
        }
      }}
    />
  );
};

export default ParticleBackground;
