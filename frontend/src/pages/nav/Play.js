/* eslint-disable react/jsx-pascal-case */
import { useParams } from "react-router-dom";
import { Container } from "../../styles/components";
import { takePlay } from "../../database/api";
import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

function Play() {
    const [movie, setMovie] = useState({});
    const { name } = useParams();
    
    useEffect(() => {
        setMovie(takePlay(name))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(movie.link)

    return (
        <Container>
            <Box>
                <CustomVideo videoSource={movie.link} />
            </Box>
            {/* <Film>
                <CustomVideo autoPlay controls>
                    <source src={movie.link} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                </CustomVideo>
                <Controls>
                    <Button>Play/Pause</Button>
                    <Button>mute</Button>
                </Controls>
            </Film> */}
        </Container>
    );
};

const Box = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
`

const Film = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

const CustomVideo = ({ videoSource }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    return (
        <Film>
            <Video ref={videoRef} autoPlay>
                <source src={videoSource} type="video/mp4" />
            </Video>
            <ControlHover>
                <Controls>
                    <Button onClick={togglePlayPause}>{isPlaying ? 'Play' : 'Pause'}</Button>
                    <Button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</Button>
                </Controls>
            </ControlHover>
        </Film>
    );
};

const Video = styled.video`
    width: 100%;
    height: 100%;
`

const ControlHover = styled.div`
    position: absolute;

    height: 100vh;
    width: 100%;

    bottom: 0px;
    left: 0;

    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;



    &:hover {
        & div {
            bottom: 0px;
        }
    }
`

const Controls = styled.div`
    position: absolute;

    bottom: -80px;
    left: 0;
    transition: all 0.5s ease;

    width: 100%;
    background-color: transparent;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0 10px;
`

export {
    Play
}