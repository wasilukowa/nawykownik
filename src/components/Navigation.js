import React from 'react';
import styled from 'styled-components';
import { HashRouter, NavLink } from "react-router-dom";

const NavigationContainer = styled.nav`
    width: 100%;
    border: 1px solid red;
    font-size: 2em;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
`;

const Home = () => {
    return (
        <NavigationContainer>
            <ul>
                <li><NavLink exact to={"/"}>Home</NavLink></li>
                <li><NavLink exact to={"/dodajnowy"}>Dodaj nowy</NavLink></li>
                <li><NavLink exact to={"/archiwum"}>Archiwum</NavLink></li>
                <li><NavLink exact to={"/ustawienia"}>Ustawienia</NavLink></li>
            </ul>
        </NavigationContainer>
    )
}

export default Home;