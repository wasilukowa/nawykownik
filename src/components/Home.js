import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { TasksArrayContext } from '../context/TasksArrayContext';
import { MessageStyled } from '../styles/Message';
import TasksContainer from './TasksContainer';


const Home = () => {

    const { taskArray } = useContext(TasksArrayContext);

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