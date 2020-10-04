import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TrackerMonthlyStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .task-date {
        font-family: 'Playfair Regular';
        padding-top: 10px;
        font-size: 1.4rem;
        color: ${props => props.theme.black};
    }
    .task-title {
        font-family: 'Playfair Bold';
        text-align: center;
        font-size: 2.4em;
        color: ${props => props.theme.green};
        padding: 10px 20px;
    }
    .task-calendar{;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .task-calendar-days-names {
        display: grid;
        grid-template-columns: repeat(7, ${props => props.theme.cellSmall});
        grid-template-rows: ${props => props.theme.cellSmall};
        gap: ${props => props.theme.gapSmall};

        .day {
        font-family: Arial, sans-serif;
        font-size: 1.2em;
        color: ${props => props.theme.mint};
        align-self: center;
        }
    }
    .task-container___calendar {
        display: grid;
        grid-template-columns: repeat(7, ${props => props.theme.cellSmall});
        grid-template-rows: repeat(6, ${props => props.theme.cellSmall});
        gap: ${props => props.theme.gapSmall};

        .single-day {
        padding: 3px;
        background-color: white;
        font-size: 1.4em;
        color: black;
        padding: 3px;
        text-align: right;
        cursor: pointer;

        &.habit-to-be-checked {
            border: 1.5px solid ${props => props.theme.black};
        }

        &.habit-not-done {
            padding: 3px;
            border: 1.5px solid ${props => props.theme.black};
            display: flex;
            justify-content: center;
            align-items: center;

            &::before {
            content: '';
            display: block;
            height: calc(${props => props.theme.cellSmall} - 10px);
            width: calc(${props => props.theme.cellSmall} - 10px);
            background-color: silver;
            }
        }

        &.habit-done {
            /* padding: 3px; */
            border: 1.5px solid ${props => props.theme.black};
            display: flex;
            justify-content: center;
            align-items: center;

            &::before {
            content: '';
            display: block;
            height: calc(${props => props.theme.cellSmall} - 10px);
            width: calc(${props => props.theme.cellSmall} - 10px);
            background-color: ${props => props.theme.green};
            }
        }
        }

        .un-active {
        background-color: white;
        font-size: 1.4em;
        color: grey;
        padding: 3px;
        text-align: right;
        cursor: pointer;
        border: 1.5px solid grey;
        }
    }
    }

    .task-container__buttons {
    color: lightGrey;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;

    .button-subtle{
        padding: 0 0 20px 30px;
        cursor: pointer;
    }
    }
`;

export const TrackerMonthly = ({ task, index, toDelete, toArchive, methodToEdit }) => {

    const [taskToShow, setTask] = useState(task)
    const [daysArr, setDayStatus] = useState([...task.daysArray])
    console.log(daysArr);

    const handleStatusChange = (element, index) => {
        console.log(daysArr);
        let helpArr = daysArr;
        if (element === 1) {
            helpArr[index] = 2;
            setDayStatus([...helpArr])
        } else if (element === 2) {
            helpArr[index] = 3;
            setDayStatus([...helpArr])
        } else {
            helpArr[index] = 1;
            setDayStatus([...helpArr])
        }

        setTask({
            ...taskToShow,
            daysArray: daysArr
        })
        console.log(daysArr);
    }

    useEffect(() => {
        methodToEdit(taskToShow, index);
    }, [daysArr])

    const handleDelete = e => {
        if (typeof toDelete === 'function') {
            e.preventDefault();
            console.log(taskToShow);
            toDelete(e, taskToShow)
        } else {
            console.log('nie poszło!');
        }
    }

    const handleArchive = e => {
        if (typeof toArchive === 'function') {
            e.preventDefault();
            console.log(taskToShow);
            toArchive(e, taskToShow)
        } else {
            console.log('nie poszło!');
        }
    }

    const handleEdit = e => {
        e.preventDefault()
        if (typeof methodToEdit === 'function') {
            methodToEdit(taskToShow)
        }
    }


    let today = new Date().getDate();

    return (
        <TrackerMonthlyStyled>
            <p className='task-date'>{taskToShow.month} {taskToShow.year}</p>
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
                            return <div key={index} className={'single-day'}></div>
                        } else if (el === 1) {
                            if (index < today + taskToShow.startingDay) {
                                return <div
                                    key={index}
                                    className='single-day habit-to-be-checked'
                                    onClick={() => handleStatusChange(el, index)}
                                >
                                    {index - task.startingDay + 1}
                                </div>
                            } else {
                                return <div key={index}
                                    className='un-active'
                                >
                                    {index - task.startingDay + 1}
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
                {/* <div className="task-container__buttons">
                    <a className={'button-subtle'} onClick={e => handleEdit(e)}>edytuj</a>
                    <a className={'button-subtle'} onClick={e => handleDelete(e)}>usuń!</a>
                    <a className={'button-subtle'} onClick={e => handleArchive(e)}>przenieś do archiwum!</a>
                </div> */}
            </div>
        </TrackerMonthlyStyled>
    )
}