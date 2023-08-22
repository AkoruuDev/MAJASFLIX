import { useParams } from "react-router-dom";
import { Container } from "../../styles/components";
import { takePlay } from "../../database/api";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

function Play() {
    const [movie, setMovie] = useState({
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/Nimona.mp4",//"https://www.youtube.com/embed/lx0eir2xF5E?list=PLDj7tcnirYg30Q_br6LOArkH7YbyMySe-",
        name: "Nimona",
        folder: "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w8P7rcjEqVZ5U35WPO9x5aXl1DOFyr00FN2uq10MREDyRPWodWro3vAjY-qft-dC8kE3X4UgNI-Zm56GqdDP2SvyW8DQ=w1850-h976",
        time: "1 hora 42 minutos 45 segundos"
    });
    const { name, type } = useParams();
    
    useEffect(() => {
        // setMovie(takePlay(name, type))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(movie.link)

    return (
        <Container>
            <Teste>
                {/* <iframe
                    width="640"
                    height="360"
                    src={movie.link}
                    title={movie.name}
                    allowFullScreen
                ></iframe> */}
                <video controls width="640" height="360">
                    <source src={movie.link} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                </video>
            </Teste>
        </Container>
    );
};

const Teste = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
`

const Video = styled.source`
    width: 100px;
    height: 100px;
    background-color: black;
`;

export {
    Play
}