import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Design, Develope } from "./AllSvgs";

const MySkillsPage = () => {
    return (
        <Box>
            <LogoComponent />
            <SocialIcons />
            <PowerButton />

            <Main>
                <Title>
                    <Design width={40} height={40} fill="currentColor" /> Designer
                </Title>
                <Description>
                    I love to create design which speaks, Keep it clean, minimal and simple.
                </Description>
                <Description>
                    <strong>I like to Design</strong>
                    <ul>
                        <li>Web Design</li>
                    </ul>
                </Description>
                <Description>
                    <strong>Tools</strong>
                    <ul>
                        <li>Figma</li>
                    </ul>
                </Description>
            </Main>

            <Main>
                <Title>
                    <Develope width={40} height={40} fill="currentColor" /> FrontEnd Developer
                </Title>
                <Description>
                    I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                </Description>
                <Description>
                    <strong>Skills</strong>
                    <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
                </Description>
                <Description>
                    <strong>Tools</strong>
                    <p>VScode, Github, Codepen etc.</p>
                </Description>
            </Main>
        </Box>
    )
}

export default MySkillsPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;;
    align-items: center;
    justify-content: space-evenly;
`;

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    font-family: "Ubuntu Mono", monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(1em + 1vw);

    &>*:first-child{
        margin-right: 1rem;
    }
`;

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        color:${props => props.theme.body};
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul,p{
        margin-left: 2rem;
    }
`;