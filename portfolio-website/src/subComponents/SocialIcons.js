import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: "inherit" }} target="_blank" to={{ pathname: "https://github.com/shubhkpatel/" }}>
                    <Github width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: "inherit" }} target="_blank" to={{ pathname: "https://twitter.com/ShubhPatel_18/" }}>
                    <Twitter width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            {/* <div>
                <NavLink style={{ color: "inherit" }} target="_blank" to="/">
                    <Facebook width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: "inherit" }} target="_blank" to="/">
                    <YouTube width={25} height={25} fill="currentColor" />
                </NavLink>
            </div> */}

            <Line />
        </Icons>
    )
}

export default SocialIcons;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`;