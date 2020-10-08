import React, { useState } from 'react';
import { TrackerMonthlyStyled } from '../styles/TrackerMonthlyStyled';
import { saveEditedTaskInArrayInLocalStorage } from '../utilities/localStorageUsage';

export const TrackerMonthly = ({ task, indexOfTask }) => {

    const [taskToDisplay, setTask] = useState(task)
    const [daysArr, setDayStatus] = useState([...task.daysArray])
    let today = new Date().getDate();


    const handleStatusChange = (dayToBeChanged, index) => {
        let helpArr = daysArr;
        if (dayToBeChanged === 1) {
            helpArr[index] = 2;
            setDayStatus([...helpArr])
        } else if (dayToBeChanged === 2) {
            helpArr[index] = 3;
            setDayStatus([...helpArr])
        } else {
            helpArr[index] = 1;
            setDayStatus([...helpArr])
        }
        let taskToBeChanged = taskToDisplay;
        taskToBeChanged.daysArray = helpArr;
        saveEditedTaskInArrayInLocalStorage('tasksActive', taskToBeChanged, indexOfTask);
        setTask(taskToBeChanged);
    }


    return (
        <TrackerMonthlyStyled>
            <p className='task-date'>{taskToDisplay.month} {taskToDisplay.year}</p>
            <header className='task-title'>{taskToDisplay.title}</header>
            <div className='task-calendar'>
                <div className='task-calendar-days-names'>
                    <div className='day'>PON</div>
                    <div className='day'>WT</div>
                    <div className='day'>ŚR</div>
                    <div className='day'>CZW</div>
                    <div className='day'>PT</div>
                    <div className='day'>SOB</div>
                    <div className='day'>NIE</div>
                </div>
                <div className='task-container___calendar'>
                    {daysArr.map((el, index) => {
                        if (el === 0) {
                            return <div key={index} className={'single-day'}></div>
                        } else if (el === 1) {
                            if (index < today + taskToDisplay.startingDay) {
                                return <div
                                    key={index}
                                    className='single-day habit-to-be-checked'
                                    onClick={() => handleStatusChange(el, index)}
                                >
                                    {index - taskToDisplay.startingDay + 1}
                                </div>
                            } else {
                                return <div key={index}
                                    className='un-active'
                                >
                                    {index - taskToDisplay.startingDay + 1}
                                </div>
                            }
                        } else if (el === 2) {
                            return <div key={index}
                                className='single-day habit-not-done'
                                onClick={() => handleStatusChange(el, index)}>
                            </div>
                        } else {
                            return <div key={index}
                                className='single-day habit-done'
                                onClick={() => handleStatusChange(el, index)}>
                            </div>
                        }
                    })}
                </div>
            </div>
        </TrackerMonthlyStyled>
    )
}