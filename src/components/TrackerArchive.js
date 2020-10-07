import React, { useState } from 'react';
import { TrackerMonthlyStyled } from '../styles/TrackerMonthlyStyled';

export const TrackerArchive = ({ task, index, methodToEdit }) => {

    const [taskToShow] = useState(task)
    const [daysArr] = useState([...task.daysArray])
    console.log(daysArr);



    return (
        <TrackerMonthlyStyled>
            <p className='task-date'>{taskToShow.month} {taskToShow.year} / ARCHIWALNE</p>
            <header className='task-title'>{taskToShow.title}</header>
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
                            return <div
                                key={index}
                                className={'single-day'}
                            />
                        } else if (el === 1) {
                            return <div
                                key={index}
                                className='single-day habit-to-be-checked'
                            >
                                {index - task.startingDay + 1}
                            </div>
                        } else if (el === 2) {
                            return <div
                                key={index}
                                className='single-day habit-not-done'
                            >
                            </div>
                        } else {
                            return <div
                                key={index}
                                className='single-day habit-done'
                            >
                            </div>
                        }
                    })}
                </div>
            </div>
        </TrackerMonthlyStyled >
    )
}