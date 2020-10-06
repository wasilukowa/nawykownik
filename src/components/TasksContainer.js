import React, { useContext } from 'react';
import { TasksArrayContext } from '../context/TasksArrayContext';
import { TrackerMonthly } from '../components/TrackerMonthly';

const TaskContainer = () => {

    const { taskArray, setTaskArray } = useContext(TasksArrayContext);

    const handleDeleteTask = () => {
    }

    const handleArchive = () => {
    }

    const handleEditingTask = (taskEdited, indexOnTaskArray) => {
        let helpArray = taskArray;
        helpArray[indexOnTaskArray] = taskEdited;
        setTaskArray(helpArray);
        localStorage.setItem('tasks', JSON.stringify(helpArray));
    }

    return (
        taskArray.map((task, index) => {
            return <TrackerMonthly
                key={task.key}
                task={task}
                index={index}
                toDelete={handleDeleteTask}
                toArchive={handleArchive}
                methodToEdit={handleEditingTask}
            />
        })
    )
}

export default TaskContainer;