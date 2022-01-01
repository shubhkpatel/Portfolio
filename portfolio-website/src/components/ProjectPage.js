import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";
import { Project } from "../data/ProjectData";
import Card from "../subComponents/Card";

const ProjectPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />

                <Main>
                    {
                        Project.map((project) => {
                            return <Card key={project.id} data={project}></Card>
                        })
                    }
                </Main>

            </Box>
        </ThemeProvider>
    )
}

export default ProjectPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
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