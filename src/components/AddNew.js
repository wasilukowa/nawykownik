import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../utilities/task';

const AddNewContainerStyled = styled.div`
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

    const handleTitleInput = event => {
        event.preventDefault();
        setNewTask({
            ...newTask,
            title: (event.target.value)
        }
        )
    }

    return (
        <AddNewContainerStyled>
            <div className='add-new__form-title-container'>
                <h3>Nowy nawyk do monitorowania:</h3>
                <textarea
                    name={'title'}
                    value={newTask.title}
                    onChange={e => handleTitleInput(e)}
                    cols="30"
                    rows="4"
                    placeholder='Wpisz nawyk, jaki chcesz monitorować :)' />
            </div>
        </AddNewContainerStyled>

    )
}

export default AddNew;