import React from 'react';
import { MessageStyled } from '../styles/Message';
import { TrackerArchive } from '../components/TrackerArchive';

const Archive = () => {

    const archiveTaskArray = JSON.parse(localStorage.getItem('archiveItems')) || [];

    const handleEditingTask = () => {
        console.log('Will do nothing :)')
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
                        <div key={task.key}>
                            <TrackerArchive
                                task={task}
                                index={index}
                                methodToEdit={handleEditingTask}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Archive;