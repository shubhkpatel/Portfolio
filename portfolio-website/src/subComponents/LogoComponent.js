import styled from "styled-components";

const LogoComponent = () => {
    return (
        <Logo>
            SP
        </Logo>
    )
}

export default LogoComponent;

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    font-family: "Pacifico", cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`;