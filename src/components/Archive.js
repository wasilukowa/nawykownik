import React from 'react';
import { MessageStyled } from '../styles/Message'

const Archive = () => {
    return (
        <MessageStyled>
            <p>to be done soon</p>
        </MessageStyled>
    )

    // let archiveArray = JSON.parse(localStorage.getItem('archiveItems'));

    // const handleEditingTask = () => {
    //     console.log('Will do nothing :)')
    // }

    // return (
    //     <>
    //         {archiveArray.map((task, index) => {
    //             return (
    //                 <div key={task.key}>
    //                     <TrackerMonthly
    //                         task={task}
    //                         index={index}
    //                         methodToEdit={handleEditingTask}
    //                     />
    //                 </div>
    //             )
    //         })}
    //     </>
    // )
}

export default Archive;