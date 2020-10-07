import React, { useState } from 'react';
import { TrackerArchive } from './TrackerArchive';
import styled from 'styled-components';

import {
    takeArrayFromLocalStorage,
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

const TasksArchiveContainer = () => {

    const [tasksArchiveArray, setTasksArchiveArray] = useState(takeArrayFromLocalStorage('tasksArchive') || []);

    const handleDelete = (event, taskToDelete) => {
        event.preventDefault();
        removeAnItemFromArrayFromLocalStorage('tasksArchive', taskToDelete);
        setTasksArchiveArray(takeArrayFromLocalStorage('tasksArchive'));
    }

    return (
        <TrackerMonthlyStyled>
            {tasksArchiveArray.map((task) => {
                return (
                    <div key={task.key}>
                        <TrackerArchive task={task} />
                        <div className="buttons-container">
                            <button onClick={e => handleDelete(e, task)}>USUŃ</button>
                        </div>
                    </div>
                )
            })}
        </TrackerMonthlyStyled>
    )
}

export default TasksArchiveContainer;