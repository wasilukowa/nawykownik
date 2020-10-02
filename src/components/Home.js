import React, { useContext, useState } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from './TrackerMonthly';

const Home = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    const [editState, setEditState] = useState(false)
    const [taskToBeEdited, setTaskToBeEdited] = useState(null)

    const [commentToBeShow, setComment] = useState('Pobieram dane...')

    const handleDeleteTask = () => {
        console.log('handle delete method!')
    }

    const handleArchive = () => {
        console.log('handle archive method!')
    }

    const handleEditingTask = () => {
        console.log('handle editing method!')
    }

    return (
        editState === true
            ?
            <div> TU JEST KOMPONENT EDIT TASK</div>
            // <EditTask
            //     task={taskToBeEdited}
            //     methodToEdit={handleEditingTask}
            // />
            :
            <div>
                {taskArray.length !== 0 ?
                    taskArray.map(task => {
                        return <TrackerMonthly key={task.key}
                            task={task}
                            toDelete={handleDeleteTask}
                            toArchive={handleArchive}
                            methodToEdit={handleEditingTask}

                        />
                    })
                    :
                    <div className={'messageToBeShown'}>
                        <p> {commentToBeShow}</p>
                    </div>}
            </div>
    )
}

export default Home;