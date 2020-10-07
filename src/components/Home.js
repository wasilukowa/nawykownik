import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MessageStyled } from '../styles/Message';
import TasksContainer from './TasksActiveContainer';
import { takeArrayFromLocalStorage } from '../utilities/localStorageUsage';

const Home = () => {

    const [taskArray] = useState(takeArrayFromLocalStorage('tasksActive'));

    return (
        <div>
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
        </div>
    )
}

export default Home;