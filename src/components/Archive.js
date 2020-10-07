import React, { useState } from 'react';
import { MessageStyled } from '../styles/Message';
import { TrackerArchive } from '../components/TrackerArchive';

const Archive = () => {

    const [archiveTaskArray, setArchiveTaskArray] = useState(JSON.parse(localStorage.getItem('archiveItems')) || []);

    const deleteTask = (taskToBeDeleted, array) => {
        return array.filter(task => task.key !== taskToBeDeleted.key);
    }

    const handleDelete = (event, taskToDelete) => {
        event.preventDefault();

        let arrayAfterDelete = deleteTask(taskToDelete, archiveTaskArray);
        setArchiveTaskArray(arrayAfterDelete);
        localStorage.setItem('archiveItems', JSON.stringify(arrayAfterDelete));
    }

    return (
        <>
            {archiveTaskArray.length === 0 ?
                <MessageStyled>
                    <p>Nie masz nic zarchiwizowanego micz</p>
                </MessageStyled>
                :
                archiveTaskArray.map((task, index) => {
                    return (
                        <>
                            <div key={task.key}>
                                <TrackerArchive
                                    task={task}
                                    index={index}
                                />
                            </div>
                            <button onClick={e => handleDelete(e, task)}>USUŃ</button>
                        </>
                    )
                })
            }
        </>
    )
}

export default Archive;