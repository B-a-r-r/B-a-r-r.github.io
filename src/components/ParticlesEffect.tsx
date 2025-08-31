import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { loadFireflyPreset } from "@tsparticles/preset-firefly";
import { useEffect, useMemo, useState } from "react";

const ParticlesComponent = () => {

    const [init, setinit] = useState<boolean>(false);
    useEffect(() => {
        const getEngine = async () => {
            await initParticlesEngine(async (engine: Engine) => {

                await loadFireflyPreset(engine, true);
        
                await engine.load({ options: { preset: 'firefly' }});
                
            })
            setinit(true);
        }
        getEngine();
    }, []);

    const options = useMemo(() => ( {
        preset: 'firefly',
        fullScreen: {
            enable: false,
        },
        background: {
            color: {
                value: "transparent"
            },
        },
        particles: {
            color: {
                value: "#FFFFFF"
            },
            number: {
                density: {
                    enable: true,
                    area: 2000
                },
                value: 50
            },
            size: {
                random: true,
                value: 10   
            },
            speed: 8,
        }}), [init]);

    return (

        <>
        { init ? <Particles
            id="tsparticles"
            options={options}
            className="
                absolute 
                top-0 
                left-0 
                w-full 
                h-full"
        /> : <p>Error</p> }
        </>
    );
};

export default ParticlesComponent;