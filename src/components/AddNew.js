import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentMessage } from '../styles/CommentMessage';
import { Task } from '../utilities/task';

import {
    addTaskToAnArrayFromLocalStorage
} from '../utilities/localStorageUsage';


const AddNewStyled = styled.div`
    width: 100%;
    background-color: ${props => props.theme.green};
    display: flex;
    flex-direction: column;
    padding: 20px;
    h3 {
        font-family: 'Playfair Bold';
        font-size: 1.8em;
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }
    textarea {
        width: 100%;
        font-family: 'Playfair Regular';
        color: ${props => props.theme.black};
        resize: none;
        text-align: center;
        padding: 1em;
        font-size: 1.4em;
        outline: none;
    }
    button {
        outline: none;
        border: none;
        background-color: ${props => props.theme.mint};
        color: ${props => props.theme.green};
        font-family: 'Playfair Bold';
        font-size: 2em;
        padding: 1em;
        width: 100%;
        cursor: pointer;
    }

    @media (min-width: 480px){
        h3 {
            font-size: 2em;
        }
        textarea {
            font-size: 1.8em;
        }
    }

    @media (min-width: 480px){
        h3 {
            font-size: 2.2em;
        }
        textarea {
            font-size: 1.8em;
        }
    }

    @media (min-width: 550px){
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