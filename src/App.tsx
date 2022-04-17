import React from "react";
import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';


function App() {
    const particlesInit = async (main: any) => {
        console.log(main);
        await loadFull(tsParticles);
      };
      const particlesLoaded = async (container: any) => {
        console.log(container);
      };

    return (
        <React.Fragment>
                <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            "value": "#6cf3f5, #91cefb, #b7b3ce, #efaed0, #f1b8fc "
          },
        },
        fpsLimit: 300,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "bubble"
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none", //
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
            <div className="cat-container">
                <img src="https://github.com/nadin3amanda/Space-Cat/blob/main/images/spacecat.png?raw=true" alt="cat" className="spacecat"/>
            </div>
            <div className="flicker"><p className="t1">Welcome to Earth!</p>
            <p className="t2">Nadine is a Creative Noob Frontend Developer </p>
            <p className="t3">No, this cat is not Nadine</p>
            <p className="end">The End.</p></div>
            <script src="https://cdn.jsdelivr.net/npm/tsparticles@1/tsparticles.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-stars@1/tsparticles.preset.stars.bundle.min.js"></script>
        </React.Fragment>
    );
}

export default App;
