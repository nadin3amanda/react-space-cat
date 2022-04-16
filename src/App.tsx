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
      const particlesLoaded = (container: any) => {
        console.log(container);
      };

    return (
        <React.Fragment>
             <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
            <div className="cat-container">
                <img src="https://github.com/nadin3amanda/Space-Cat/blob/main/images/spacecat.png?raw=true" alt="cat" className="spacecat"/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/tsparticles@1/tsparticles.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-stars@1/tsparticles.preset.stars.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-stars@1/tsparticles.preset.stars.bundle.min.js"></script>
        </React.Fragment>
    );
}

export default App;
