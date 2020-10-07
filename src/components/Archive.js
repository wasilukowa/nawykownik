import React, { useState } from 'react';
import { MessageStyled } from '../styles/Message';
import TasksArchiveContainer from '../components/TasksArchiveContainer';

const Archive = () => {

    const [archiveTasksArray] = useState(JSON.parse(localStorage.getItem('tasksArchive')) || []);

    return (
        <>
            {archiveTasksArray.length !== 0 ?
                <TasksArchiveContainer />
                :
                <MessageStyled>
                    <p>Nie masz nic zarchiwizowanego micz</p>
                </MessageStyled>
            }
        </>
    )
}

export default Archive;