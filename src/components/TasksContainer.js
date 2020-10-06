import React, { useContext } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from '../components/TrackerMonthly';
import styled from 'styled-components';

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

    const handleDelete = (event, taskToArchive) => {
        event.preventDefault();

        let arrayAfterDelete = deleteTask(taskToArchive, taskArray);
        setTaskArray(arrayAfterDelete);
        localStorage.setItem('items', JSON.stringify(arrayAfterDelete));
    }

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