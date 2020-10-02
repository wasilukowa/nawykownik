import React, { createContext, useState } from 'react';

export const TasksArrayContext = createContext();

const TasksArrayContextProvider = props => {
    const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    console.table(taskArray);

    return (
        <TasksArrayContext.Provider value={{ taskArray, setTaskArray }}>
            {props.children}
        </TasksArrayContext.Provider>
    )
}

export default TasksArrayContextProvider;