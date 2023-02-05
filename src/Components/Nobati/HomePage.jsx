import * as React from 'react';
import Header from "./Header/Header";
import logo from './../../assets/logo.png'
import {Search} from "./Components/Search";
import './HomePage.scss'
import {Footer} from "./Footer/Footer";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ResponsiveAppBar from "../MUI/ResponsiveAppBar";


const HomePage = () => {
    const particlesInit = useCallback(async engine => {
          console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "rgb(203,198,198)",
                    //     },
                    // },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
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
                            value: "#c7cfdc",
                        },
                        links: {
                            color: "#afc6ef",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onHover: {
                                    enable: false
                                },
                                onClick: {
                                    enable: false
                                },
                                resize: true
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/*<Header/>*/}
            <ResponsiveAppBar/>
            <main className={'text-center'} style={{marginBottom: "100px"}}>
                <div style={{marginTop:'25vh'}}>
                    <Search/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};
export default HomePage;