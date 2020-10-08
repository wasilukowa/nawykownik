import React, { useState } from 'react';
import { MessageStyled } from '../styles/Message';
import TasksArchiveContainer from '../components/TasksArchiveContainer';
import styled from 'styled-components';

const ArchiveStyled = styled.div`
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
        font-size: 1.6em;
        margin-top: 1em;
        padding: 0.6em 1.6em;
        cursor: pointer;
    }
`;

const Archive = () => {

    const [archiveTasksArray, setArchiveTasksArray] = useState(JSON.parse(localStorage.getItem('tasksArchive')) || []);

    const handleResetTasksArchive = e => {
        localStorage.removeItem('tasksArchive');
        console.log('Wyczyszczone, zapomniane! Archiwum');
        setArchiveTasksArray([]);
    }

    return (
        <ArchiveStyled>
            {archiveTasksArray.length !== 0 ?
                <TasksArchiveContainer />
                :
                <MessageStyled>
                    <p>Nie masz nic zarchiwizowanego micz</p>
                </MessageStyled>
            }
            <button onClick={e => handleResetTasksArchive(e)}>Wyrzuć, zapomnij z archiwum</button>
        </ArchiveStyled>
    )
}

export default Archive;