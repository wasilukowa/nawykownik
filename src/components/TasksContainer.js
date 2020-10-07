import React, { useState } from 'react';
import { TrackerMonthly } from '../components/TrackerMonthly';
import styled from 'styled-components';

import {
    takeArrayFromLocalStorage,
    addTaskToAnArrayFromLocalStorage,
    removeAnItemFromArrayFromLocalStorage
} from '../utilities/localStorageUsage';

const TrackerMonthlyStyled = styled.div`
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

    const [tasksArray, setTasksArray] = useState(takeArrayFromLocalStorage('tasksActive'));

    const handleArchive = (event, taskToArchive) => {
        event.preventDefault();
        addTaskToAnArrayFromLocalStorage('tasksArchive', taskToArchive);
        removeAnItemFromArrayFromLocalStorage('tasksActive', taskToArchive);
        setTasksArray(takeArrayFromLocalStorage('tasksActive'));
    }

    const handleDelete = (event, taskToDelete) => {
        event.preventDefault();
        removeAnItemFromArrayFromLocalStorage('tasksActive', taskToDelete);
        setTasksArray(takeArrayFromLocalStorage('tasksActive'));
    }

    const handleEditingTask = (taskEdited, indexOnTaskArray) => {
        let helpArray = tasksArray;
        helpArray[indexOnTaskArray] = taskEdited;
        setTasksArray(helpArray);
        localStorage.setItem('tasksActive', JSON.stringify(helpArray));
    }

    return (
        <TrackerMonthlyStyled>
            {tasksArray.map((task, index) => {
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
        </TrackerMonthlyStyled>
    )
}

export default TasksContainer;