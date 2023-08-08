import { IconContext } from "react-icons/lib";
import { BoxHeader, Nav, Title, Icon, InputSearch } from "../styles/components";
import { FaSearch } from "react-icons/fa"
import { AiFillHeart } from 'react-icons/ai';
import ico from "../assets/ico.jpg";
import { useState } from "react";

function Header() {
    const [search, setSearch] = useState({search: ''})
    const [size_search, setSize_search] = useState(false)

    function getSearch(name, value) {
        setSearch({
            ...search,
            [name]: value
        })
    }

    return (
        <BoxHeader>
            <div>
                <Title>MAJASFLIX</Title>
                <Nav>
                    <p>films</p>
                    <p>series</p>
                    <p>animations</p>
                    <p>music</p>
                    <p>more</p>
                </Nav>
            </div>
            <Nav>
                <InputSearch actived={size_search} type="text" placeholder="Search" name="search" onChange={e => {
                    getSearch(
                        e.target.name,
                        e.target.value
                    )
                }} />
                <Icon onClick={e => {
                    if (!size_search){
                        setSize_search(true)
                    } else {
                        if(search.search.length === 0) {
                            setSize_search(false)
                        } else {
                            console.log(search)
                        }
                    }
                }}>
                    <IconContext.Provider value={{ color: '#dddddd', size: '30' }}>
                        <FaSearch />
                    </IconContext.Provider>
                </Icon>
                <Icon>
                    <IconContext.Provider value={{ color: '#dddddd', size: '35' }}>
                        <AiFillHeart />
                    </IconContext.Provider>
                </Icon>
                <Icon>
                    <img src={ico} alt="profile"/>
                </Icon>
            </Nav>
        </BoxHeader>
    )
};

export {
    Header,
}