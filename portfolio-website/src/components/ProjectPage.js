import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";
import { Project } from "../data/ProjectData";
import Card from "../subComponents/Card";
import { useEffect, useRef } from "react";
import { YinYang } from "./AllSvgs";

const ProjectPage = () => {
    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        
        const rotate = () => {
            ref.current.style.transform = `translateX(${-window.pageYOffset}px)`
            yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
            return;
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

                <Main ref={ref}>
                    {
                        Project.map((project) => {
                            return <Card key={project.id} data={project}></Card>
                        })
                    }
                </Main>

                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill={DarkTheme.text} />
                </Rotate>

            </Box>
        </ThemeProvider>
    )
}

export default ProjectPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 400vh;
    position: relative;

    overflow: hidden;
`;

const Main = styled.ul`
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