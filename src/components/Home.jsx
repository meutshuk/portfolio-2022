import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Resume from "./Resume.pdf";

// import Typewriter from 'typewriter-effect/dist/core';

export const Home = () => {
  React.useEffect(() => {
    var app = document.getElementById("appp");

    var typewriter = new window.Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString("I am a Full Stack Web Developer")
      .pauseFor(300)
      .deleteChars(31)
      .typeString("Designer")
      .pauseFor(1000)
      .deleteChars(8)
      .typeString('<span style="color: #27ae60;">Photographer</span>')
      .pauseFor(1000)
      .start();
  }, []);

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <div className="h-screen md:h-screen " id="home">
      <Particles
        className="-z-10 absolute h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#fff",
            },
            image: "",
            position: "",
            repeat: "",
            size: "100%",
            opacity: 1,
          },
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 167.83216783216784,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            number: {
              value: 170,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
            color: {
              value: ["#2568FB", "#FF6A3D", "#FFD200"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#00000f",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          style: {},
          themes: [],
          zLayers: 100,
        }}
      />
      <div className="text-black flex flex-col h-full justify-center items-center w-full ">
        <div className="text-[8vw]  tracking-wider text-center">
          Utshuk Raj Dhamala
        </div>
        <div
          className="text-xl sm:text-2xl md:text-4xl text-red-300"
          id="appp"
        ></div>
        <a
          className="relative inline-block group focus:outline-none mt-16 focus:ring"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

          <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};
