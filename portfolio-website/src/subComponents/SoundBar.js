import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import music from "../assets/audio/u-said-it-v13-1167.mp3";

const SoundBar = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [click])

    return (
        <Box onClick={() => setClick(!click)}>
            <Link click={click} />
            <Link click={click} />
            <Link click={click} />
            <Link click={click} />
            <Link click={click} />

            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar;

const Box = styled.div`
    display:flex;
    cursor:pointer;
    position:fixed;
    top:3rem;
    left:8rem;
    z-index:10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }
`;

const play = keyframes`
    0% {transform:scaleY(1);}
    50%{transform:scaleY(2);}
    100%{transform:scaleY(1);}
`;

const Link = styled.span`
    background: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};
    height: 1rem;
    width: 2px;
    margin:0 0.1rem;
    animation:${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
`;