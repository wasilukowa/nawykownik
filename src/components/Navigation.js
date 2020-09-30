import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../LOGO-09.svg'

const NavigationContainer = styled.nav`
    width: 100%;
    /* border: 1px solid red; */
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    .nav__router-link {
        text-decoration: none;
        color: ${props => props.theme.black};
        padding: 0.6em;
        font-size: 1.2em;
        border: 1px solid green;
    }
    .nav__flex-logo {
        display: flex;
        justify-content: center;
        border: 1px solid green;
        flex-basis: 100%;

        .nav__logo{
        width: 200px;
        }
    }        
    .nav__flex-menu-special {
            order: 3;
            flex-basis: 100%;
            text-align: center;
        }

    @media (min-width: 350px){
        .nav__flex-menu-special {
            order: 0;
            flex-basis: auto;
        }
    }

    @media (min-width: 550px){
        .nav__flex-logo {
            flex-basis: auto;
        }
    }

`;

const Home = () => {
    return (
        <NavigationContainer>
            <div className='nav__flex-logo'>
                <img className='nav__logo' src={logo} alt="" />
            </div>
            <NavLink
                className='nav__router-link nav__flex-menu'
                activeClassName='nav__router-link-active'
                exact to={"/"}>
                Home
                    </NavLink>
            <NavLink
                className='nav__router-link nav__flex-menu-special'
                activeClassName='nav__router-link-active'
                exact to={"/dodajnowy"}>
                Dodaj nowy
                    </NavLink>
            <NavLink
                className='nav__router-link nav__flex-menu'
                activeClassName='nav__router-link-active'
                exact to={"/archiwum"}>
                Archiwum
                    </NavLink>
            <NavLink
                className='nav__router-link nav__flex-menu'
                activeClassName='nav__router-link-active'
                exact to={"/ustawienia"}>
                Ustawienia
            </NavLink>
        </NavigationContainer >
    )
}

export default Home;