import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentMessage } from '../styles/CommentMessage';
import { Task } from '../utilities/task';

import {
    addTaskToAnArrayFromLocalStorage
} from '../utilities/localStorageUsage';


const AddNewStyled = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colorMain};
    display: flex;
    flex-direction: column;
    padding: 20px;
    h3 {
        font-family: 'Playfair Bold';
        font-size: 1.8em;
        color: ${({ theme }) => theme.textInverse};
        text-align: center;
        margin-bottom: 20px;
    }
    textarea {
        width: 100%;
        font-family: 'Playfair Regular';
        color: ${({ theme }) => theme.colorJustBlack};
        resize: none;
        text-align: center;
        padding: 1em;
        font-size: 1.4em;
        outline: none;
        border-radius: 10px;
    }
    button {
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorMain};
        font-family: 'Playfair Bold';
        font-size: 2em;
        padding: 1em;
        width: 100%;
        margin: 0;
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) => theme.sizeSecond}){
        h3 {
            font-size: 2.2em;
        }
        textarea {
            font-size: 1.8em;
        }
    }

    @media (min-width: ${({ theme }) => theme.sizeFourth}){
        h3 {
            font-size: 2.6em;
        }
        textarea {
            font-size: 2.2em;
        }
    }
`;

const AddNew = () => {

    const [newTask, setNewTask] = useState(new Task());
    const [comment, setComment] = useState('');

    const handleTitleInput = event => {
        event.preventDefault();
        setNewTask({
            ...newTask,
            title: (event.target.value)
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (newTask.title.length > 5) {
            addTaskToAnArrayFromLocalStorage('tasksActive', newTask)
            setNewTask(new Task());
            setComment('Nawyk dodany do monitorowania. Przejdź do Home');
            setTimeout(() => {
                setComment('');
            }, 5000)
        } else {
            setNewTask(new Task());
            setComment('Nazwa nawyku powinna mieć co najmniej 5 znaków. Spróbuj ponownie.');
            setTimeout(() => {
                setComment('');
            }, 5000)
        }
    }

    return (
        <>
            <AddNewStyled>
                <form className='add-new__form-title-container'>
                    <h3>Nowy nawyk do monitorowania:</h3>
                    <textarea
                        name={'title'}
                        value={newTask.title}
                        onChange={e => handleTitleInput(e)}
                        cols="30"
                        rows="4"
                        placeholder='Wpisz nawyk, jaki chcesz monitorować :)'
                        onKeyDown={e => e.keyCode === 13 && handleFormSubmit(e)}
                    />
                    <button
                        onClick={e => handleFormSubmit(e)}
                    >
                        Dodaj
                    </button>
                </form>
            </AddNewStyled>
            <CommentMessage>
                {comment !== '' && <p>{comment}</p>}
            </CommentMessage>
        </>
    )
}

export default AddNew;