import React, { createContext, useState } from 'react';

export const ArchiveTasksArrayContext = createContext();

const ArchiveTasksArrayContextProvider = props => {
    const [archiveTaskArray, setArchiveTaskArray] = useState(JSON.parse(localStorage.getItem('archiveItems')) || []);

    return (
        <ArchiveTasksArrayContext.Provider value={{ archiveTaskArray, setArchiveTaskArray }}>
            {props.children}
        </ArchiveTasksArrayContext.Provider>
    )
}

export default ArchiveTasksArrayContextProvider;