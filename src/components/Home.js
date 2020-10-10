import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MessageStyled } from '../styles/Message';
import TasksContainer from './TasksActiveContainer';
import { takeArrayFromLocalStorage } from '../utilities/localStorageUsage';
import styled from 'styled-components';

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 100px);
    button {
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorMain};
        font-family: 'Playfair Bold';
        font-size: 1.2em;
        padding: 0.6em 1em;
        margin: 1em;
        cursor: pointer;
    }
    @media (min-width: 250px) {
        button {
            font-size: 1.6em;
            padding: 1em 1.6em;
        }
    }
    @media (min-width: 400px) {
        button {
            font-size: 1.8em;
            padding: 1em 1em;
        }
    }
`;
const Home = () => {

    const [taskArray, setTaskArray] = useState(takeArrayFromLocalStorage('tasksActive'));

    const handleResetTasksActive = e => {
        localStorage.removeItem('tasksActive');
        console.log('Wyczyszczone, zapomniane! Aktywne');
        setTaskArray([]);
    }

    return (
        <HomeStyled>
            {taskArray.length !== 0 ?
                <TasksContainer />
                :
                <MessageStyled>
                    <p>Nie masz żadnych nawyków do monitorowania</p>
                    <NavLink
                        className='nav__router-link nav__flex-menu'
                        exact to='/dodajnowy'
                    >
                        Dodaj nowy nawyk
                    </NavLink>
                </MessageStyled>}
            <button onClick={e => handleResetTasksActive(e)}>Usuń wszystkie aktywne nawyki</button>
        </HomeStyled>
    )
}

export default Home;