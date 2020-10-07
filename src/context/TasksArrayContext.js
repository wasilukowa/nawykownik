import React, { createContext, useState } from 'react';
import { takeArrayFromLocalStorage } from '../utilities/localStorageUsage';

export const TasksArrayContext = createContext();

const TasksArrayContextProvider = props => {
    const [taskArray, setTaskArray] = useState(takeArrayFromLocalStorage('tasksActive') || []);

    return (
        <TasksArrayContext.Provider value={{ taskArray, setTaskArray }}>
            {props.children}
        </TasksArrayContext.Provider>
    )
}

export default TasksArrayContextProvider;