/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Embed_icon, Embed_title, Embed_titleBox, Embed_button, Embed_buuttonBox } from "../../styles/components";
import { CiPlay1 } from 'react-icons/ci';
import { IoAddCircleOutline } from 'react-icons/io5'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { takeAllMovie } from "../../database/api";

function Movie() {
    const [movies, setMovies] = useState([{}]);
    const [more, setMore] = useState(false);
    const [list, setList] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setMovies(takeAllMovie())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(movies)
    function play(thisMovie) {
        navigate(`/play/${thisMovie.name}/`)
    }

    return (
        <Box>{movies.map(movie => {
            return (
            <Embed>
                <Sup>
                    <Bgi src={movie.folder} alt={`movie-${movie.name}`} /> {/* background image */}
                    <Embed_icon>M</Embed_icon> {/* MAJAS icon */}
                    <Embed_title color={'#ff3333'}>{movie.name}</Embed_title> {/* movie name */}
                </Sup>
                <Inf>
                    <div>
                        <Embed_titleBox color={'#fff'}>{movie.name}</Embed_titleBox> {/* movie name */}
                        <Lauch>{movie.launch}</Lauch>
                        <Embed_buuttonBox>
                            <Embed_button onClick={() => play(movie)}>
                                <CiPlay1 /> <span>play</span>
                            </Embed_button> {/* play icon */}
                            <Embed_button onClick={() => setList(!list)}>{list ?
                                <IoAddCircleOutline /> :
                                <BsCheckCircleFill />} <span>lista</span>
                            </Embed_button>{/* Adicionar à lista */}
                        </Embed_buuttonBox>
                        <Time>{movie.type} {movie.time !== undefined ? ` • ${movie.time}`: ""}</Time>
                        <Genre>
                            {movie.genre?.map((e, i) => {
                                if (i === 0) return <span>{e}</span>
                                return <span> • {e}</span>
                            })}
                        </Genre>
                        {more ? <Sinopse>{movie.sinopse}</Sinopse> : <></>}
                        <Embed_button onClick={() => setMore(!more)}>{more ? <>Menos</> : <>Mais</>}</Embed_button> {/* more */}
                    </div>
                </Inf>
            </Embed>)
        })}</Box>
    );
};

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Embed = styled.div`
    width: 250px;
    height: 150px;
    border-radius: 15px;
    margin: 20px;

    transition: all .5s ease;
    cursor: pointer;

    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.2);
        z-index: 5;
        overflow: visible;

        & > :nth-child(2) {
            display: block;
            padding: 25px 12px;
            top: 135px;
            border-radius: 0 0 15px 15px;
        }
    }
`;

const Sup = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 2;
`;

const Inf = styled.div`
    background-color: #333;
    width: 100%;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;

    transition: all .5s ease;

    position: absolute;
    top: 0;
    z-index: 1;

    & > div {
        margin-top: 10px;
    }
`;

const Bgi = styled.img`
    width: 110%;
`;

const Lauch = styled.div`
    color: #39ff14;
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0 0 14px 0;
`

const Time = styled.p`
    font-size: 12px;
    color: #ffd700;
`

const Genre = styled.div`
    color: #39ff14;
    font-size: 10px;
    margin: 15px 0;
`

const Sinopse = styled.div`
    color: #ffdd33;
    font-size: 13px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    display: flex;
    text-align: center;

    width: 100%;
    max-height: 100px;
    margin-bottom: 15px;

    overflow: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

export {
    Movie,
}