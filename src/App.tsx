import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

function App() {
    const particlesInit = useCallback((engine: Engine) => {
        loadFull(engine);
    }, []);

    return (
        <React.Fragment>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
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
