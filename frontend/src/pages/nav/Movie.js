/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Embed_icon, Embed_title } from "../../styles/components";
import { CiPlay1 } from 'react-icons/ci';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { takeAllMovie } from "../../database/api";

function Movie() {
    const [gen, setGen] = useState([1, 1]);
    const [movies, setMovies] = useState([{}]);
    const [fav, setFav] = useState(false);
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
        <>{movies.map(movie => {
            return (<Embed>
                <Sup>
                    <Bgi src={movie.folder} alt={`movie-${movie.name}`} /> {/* background image */}
                    <Embed_icon>M</Embed_icon> {/* MAJAS icon */}
                    <Embed_title color={'#ff3333'}>{movie.name}</Embed_title> {/* movie name */}
                </Sup>
                <Inf>
                    <div>
                        <CiPlay1 onClick={() => play(movie)} /> {/* play icon */}
                        <span onClick={() => setFav(!fav)}>{fav ? <AiFillHeart /> : <AiOutlineHeart />}</span> {/* favoritar */}
                        <span></span> {/* more */}
                        <div>
                            {gen.forEach(e => {
                                <span>{e}</span>
                            })}
                        </div>
                    </div>
                </Inf>
            </Embed>)
        })}</>
    );
};

const Embed = styled.div`
    width: 250px;
    height: 150px;
    border-radius: 15px;

    transition: all .5s ease;
    cursor: pointer;

    position: relative;

    &:hover {
        transform: scale(1.2);

        & > :nth-child(2) {
            padding: 25px 12px;
        }
    }
`;

const Sup = styled.div`
    background-color: #fff;
    width: 100%;
    height: 150px;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: absolute;
    z-index: 2;
`;

const Inf = styled.div`
    background-color: #777;
    width: 100%;

    transition: all .5s ease;

    position: absolute;
    bottom: -50px;
    z-index: 1;

    & > div {
        margin-top: 50px;
    }
`;

const Bgi = styled.img`
    width: 110%;
`;

export {
    Movie,
}