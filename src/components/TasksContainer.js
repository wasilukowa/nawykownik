import React, { useContext } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from '../components/TrackerMonthly';
import styled from 'styled-components';

const TrackerMonthlyContainer = styled.div`

`;


const TasksContainer = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    const handleArchive = (event, taskToArchive) => {
        event.preventDefault();

        let archiveArray = JSON.parse(localStorage.getItem('archiveItems')) || [];
        archiveArray.push(taskToArchive);
        localStorage.setItem('archiveItems', JSON.stringify(archiveArray));

        let arrayAfterDelete = deleteTask(taskToArchive, taskArray);
        setTaskArray(arrayAfterDelete);
        localStorage.setItem('items', JSON.stringify(arrayAfterDelete));
    }

    const deleteTask = (taskToBeDeleted, array) => {
        return array.filter(task => task.key !== taskToBeDeleted.key);
    }

    // const handleDelete = e => {
    //     if (typeof toDelete === 'function') {
    //         e.preventDefault();
    //         console.log(taskToShow);
    //         toDelete(e, taskToShow)
    //     } else {
    //         console.log('nie poszło!');
    //     }
    // }

    // const handleArchive = e => {
    //     if (typeof toArchive === 'function') {
    //         e.preventDefault();
    //         console.log(taskToShow);
    //         toArchive(e, taskToShow)
    //     } else {
    //         console.log('nie poszło!');
    //     }
    // }
    // const handleEdit = e => {
    //     e.preventDefault()
    //     if (typeof methodToEdit === 'function') {
    //         methodToEdit(taskToShow)
    //     }
    // }


    const handleEditingTask = (taskEdited, indexOnTaskArray) => {
        let helpArray = taskArray;
        helpArray[indexOnTaskArray] = taskEdited;
        setTaskArray(helpArray);
        localStorage.setItem('tasks', JSON.stringify(helpArray));
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
                        <button onClick={e => handleArchive(e, task)}>ARCHIWIZUJ</button>
                    </div>
                )
            })}
        </TrackerMonthlyContainer>
    )
}

export default TasksContainer;