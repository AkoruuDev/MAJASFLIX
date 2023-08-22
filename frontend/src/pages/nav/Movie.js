/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import { styled } from "styled-components";
import { Embed_icon, Embed_title } from "../../styles/components";
import { CiPlay1 } from 'react-icons/ci';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function Movie() {
    const [gen, setGen] = useState([1, 1]);
    const [movie, setMovie] = useState({
        link: "https://rr3---sn-bg07dnrd.c.drive.google.com/videoplayback?expire=1691113465&ei=uR_MZOHtI7PA2LYPttK-4AI&ip=2804:5358:8010:38:1148:3c8e:7e63:d51e&cp=QVROU0JfUlRURlhPOjN4dlVMZ1BzVUlfNkpQYVktdWFsSjRNemg1WXBLMW0waDV2VUpzQWVvano&id=78671ba5de40d7e6&itag=18&source=webdrive&requiressl=yes&mh=95&mm=32&mn=sn-bg07dnrd&ms=su&mv=u&mvi=3&pl=32&ttl=transient&susc=dr&driveid=1oFN_tZlf0CL_t1T4EZ7gYKby-vjP8-BD&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=6165.966&lmt=1690931872934434&mt=1691098768&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgNLXh8uO47g1uhEdtfebHUJiPv5mqPADpU60NTtCbfoQCIAHiRTFjrMQhT9SAWVVfyv1pUp4hvHN24De832uIu87a&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhANTUL8dpiyJC3ApNS7CR8BqgjIqB14E0BAO8FMToX41mAiB0blhgsLvr2BGTdVFChS1g3AFsDCqiSGTEq-OHa9wAeQ==&cpn=8yZL8P9baC8jqd6F&c=WEB_EMBEDDED_PLAYER&cver=1.20230730.00.00",
        name: "Nimona",
        folder: "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w8P7rcjEqVZ5U35WPO9x5aXl1DOFyr00FN2uq10MREDyRPWodWro3vAjY-qft-dC8kE3X4UgNI-Zm56GqdDP2SvyW8DQ=w1850-h976",
        time: "1 hora 42 minutos 45 segundos"
    });
    const [fav, setFav] = useState(false);
    const navigate = useNavigate()

    function play() {
        navigate(`/play/${movie.name}/dub`)
    }

    return (
        <Embed>
            <Sup>
                <Bgi src={movie.folder} alt={`movie-${movie.name}`} /> {/* background image */}
                <Embed_icon>M</Embed_icon> {/* MAJAS icon */}
                <Embed_title color={'#ff3333'}>Nimona</Embed_title> {/* movie name */}
            </Sup>
            <Inf>
                <div>
                    <CiPlay1 onClick={() => play()} /> {/* play icon */}
                    <span onClick={() => setFav(!fav)}>{fav ? <AiFillHeart /> : <AiOutlineHeart />}</span> {/* favoritar */}
                    <span></span> {/* more */}
                    <div>
                        {gen.forEach(e => {
                            <span>{e}</span>
                        })}
                    </div>
                </div>
            </Inf>
        </Embed>
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