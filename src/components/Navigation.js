import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../LOGO-09.svg'

const NavigationContainer = styled.nav`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    padding-bottom: 2em;
    .nav__router-link {
        text-decoration: none;
        color: ${props => props.theme.black};
        padding: 0.6em;
        font-size: 1.4em;
        transition: .7s;
        &:hover{
            color: ${props => props.theme.green};
            transform: scale(1.1);
        }
    }
    .nav__flex-logo {
        display: flex;
        justify-content: center;
        flex-basis: 90%;
    }
    .nav__logo {
        width: 60vw;
    }
    .nav__flex-menu-special {
            order: 3;
            flex-basis: 90%;
            text-align: center;
        }
    .nav__router-link-active{
        font-family: 'Playfair Bold';
        color: ${props => props.theme.green};
        transform: scale(1.2);
    }

    @media (min-width: 350px){
    .nav__router-link {
        font-size: 1.6em;
        }
    }


    @media (min-width: 450px){
        .nav__flex-menu-special {
            order: 0;
            flex-basis: auto;
        }
    }

    @media (min-width: 660px){
        .nav__flex-logo {
            flex-basis: auto;
            .nav__logo{
                width: 240px;
            }
        }
    }

    @media (min-width: 900px){
        .nav__router-link {
        font-size: 2em;
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