import React, { useContext, useState } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from './TrackerMonthly';
import { MessageStyled } from '../styles/Message';
import { NavLink } from 'react-router-dom';



const Home = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    const [taskToBeEdited, setTaskToBeEdited] = useState(null)

    const [commentToBeShow, setComment] = useState('Pobieram dane...')

    const handleDeleteTask = () => {
        console.log('handle delete method!')
    }

    const handleArchive = () => {
        console.log('handle archive method!')
    }

    const handleEditingTask = (taskEdited, indexOnTaskArray) => {
        console.log('handle editing method!', taskEdited, indexOnTaskArray);
        let helpArray = taskArray;
        helpArray[indexOnTaskArray] = taskEdited;
        setTaskArray(helpArray);
        localStorage.setItem('tasks', JSON.stringify(helpArray));
        console.log('zapisane?');
    }

    return (
        <div>
            {taskArray.length !== 0 ?
                taskArray.map((task, index) => {
                    return <TrackerMonthly
                        key={task.key}
                        task={task}
                        index={index}
                        toDelete={handleDeleteTask}
                        toArchive={handleArchive}
                        methodToEdit={handleEditingTask}

                    />
                })
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