import styled from "styled-components";
import bgimg from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import { Blogs } from "../data/BlogData";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import WorkComponent from "./WorkComponent";

const WorkPage = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />

                <Center>
                    <Grid>
                        {Blogs.map(blog => {
                            return <WorkComponent key={blog.id} blog={blog} />
                        })}
                    </Grid>
                </Center>

            </Container>
        </MainContainer>
    )
}

export default WorkPage;

const MainContainer = styled.div`
    background-image: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`;

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`;