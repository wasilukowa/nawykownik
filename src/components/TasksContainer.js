import React, { useContext } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from '../components/TrackerMonthly';
import styled from 'styled-components';

import {
    takeArrayFromLocalStorage,
    saveArrayToLocalStorage,
    returnArrayWithoutATask,
    addTaskToAnArrayFromLocalStorage,
    removeAnItemFromArrayFromLocalStorage
} from '../utilities/localStorageUsage';

const TrackerMonthlyContainer = styled.div`
    .buttons-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    button {
        border: none;
        background-color: ${props => props.theme.mint};
        color: ${props => props.theme.black};
        font-family: 'Playfair Regilar';
        padding: 1em 2em;
        font-size: 2em;
        margin: 0 10px;
    }
`;


const TasksContainer = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    const handleArchive = (event, taskToArchive) => {
        event.preventDefault();
        addTaskToAnArrayFromLocalStorage('tasksArchive', taskToArchive);
        removeAnItemFromArrayFromLocalStorage('tasksActive', taskToArchive);
        setTaskArray(takeArrayFromLocalStorage('tasksActive'));
    }

    const handleDelete = (event, taskToArchive) => {
        event.preventDefault();
        let arrayAfterDelete = returnArrayWithoutATask(taskToArchive, taskArray);
        setTaskArray(arrayAfterDelete);
        localStorage.setItem('itemsActive', JSON.stringify(arrayAfterDelete));
    }

    const handleEditingTask = (taskEdited, indexOnTaskArray) => {
        let helpArray = taskArray;
        helpArray[indexOnTaskArray] = taskEdited;
        setTaskArray(helpArray);
        localStorage.setItem('tasksActive', JSON.stringify(helpArray));
    }

    return (
        <TrackerMonthlyContainer>
            {taskArray.map((task, index) => {
                return (
                    <div key={task.key}>
                        <TrackerMonthly
                            task={task}
                            index={index}
                            methodToEdit={handleEditingTask}
                        />
                        <div className="buttons-container">
                            <button onClick={e => handleArchive(e, task)}>ARCHIWIZUJ</button>
                            <button onClick={e => handleDelete(e, task)}>USUŃ</button>
                        </div>
                    </div>
                )
            })}
        </TrackerMonthlyContainer>
    )
}

export default TasksContainer;