import React, { useContext } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import TaskContainer from './TasksContainer';
import { MessageStyled } from '../styles/Message';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    return (
        <div>
            {taskArray.length !== 0 ?
                <TaskContainer />
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