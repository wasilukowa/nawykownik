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
        background-color: ${props => props.theme.mint};
        color: ${props => props.theme.green};
        font-family: 'Playfair Bold';
        font-size: 1.6em;
        margin-top: 1em;
        padding: 1em;
        margin: 1em;
        cursor: pointer;
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
                    <p>Nie masz żodnych nawyków do monitorowania!</p>
                    <NavLink
                        className='nav__router-link nav__flex-menu'
                        exact to='/dodajnowy'
                    >
                        Dodaj coś! :)
                    </NavLink>
                </MessageStyled>}
            <button onClick={e => handleResetTasksActive(e)}>WYRZUĆ, ZAPOMNIJ NAWYKI AKTYWNE</button>
        </HomeStyled>
    )
}

export default Home;