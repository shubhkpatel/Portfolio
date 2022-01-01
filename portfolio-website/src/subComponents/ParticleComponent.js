import Particles from "react-particles-js";
//Particle Config Files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

import styled from "styled-components";


const ParticleComponent = ({ theme }) => {
    return (
        <Box>
            <Particles style={{ position: 'absolute', top: 0 }} params={theme === "light" ? configLight : configDark} />
        </Box>
    )
}

export default ParticleComponent;

const Box = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
`;