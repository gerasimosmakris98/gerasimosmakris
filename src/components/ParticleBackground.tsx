
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
        fpsLimit: 120,
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ["#60A5FA", "#A78BFA", "#F472B6", "#FCD34D"]
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.15,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: "#ffffff",
            opacity: 0.15,
            width: 1.5
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"]
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4
              }
            },
            bubble: {
              distance: 150,
              size: 6,
              duration: 2,
              opacity: 0.3,
              speed: 3
            },
            push: {
              particles_nb: 6
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticleBackground;
