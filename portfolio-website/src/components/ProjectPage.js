import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";
import { Project } from "../data/ProjectData";
import Card from "../subComponents/Card";
import { useEffect, useRef } from "react";
import { YinYang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const ProjectPage = () => {

    // Framer-motion configuration
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                duration: 0.5,
            }
        }
    }

    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {

        const rotate = () => {
            ref.current.style.transform = `translateX(${-window.pageYOffset}px)`;
            return yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
        }

        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate);
        }
    }, []);

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />

                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {
                        Project.map((project) => {
                            return <Card key={project.id} data={project}></Card>
                        })
                    }
                </Main>

                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill={DarkTheme.text} />
                </Rotate>

                <BigTitle text="PROJECT" top="10%" right="20%" />

            </Box>
        </ThemeProvider>
    )
}

export default ProjectPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 300vh;
    position: relative;

    display: flex;
    align-items: center;
`;

const Main = styled(motion.ul)`
    color:white;
    position: fixed;
    top: 12rem;
    left:calc(10rem + 15vw);
    height: 40vh;
    display: flex;
`;

const Rotate = styled.span`
    display:block;
    position: fixed;
    right:1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index:1;
`;