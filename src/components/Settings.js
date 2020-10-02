import React from 'react';
import styled from 'styled-components';

const SettingsContainerStyled = styled.div`
    padding-top: 4em;
    p {
        font-family: 'Playfair Regular';
        font-size: 1.6em;
    }
    button {
        outline: none;
        border: none;
        background-color: ${props => props.theme.mint};
        color: ${props => props.theme.green};
        font-family: 'Playfair Bold';
        font-size: 1.6em;
        margin-top: 1em;
        padding: 1em;
        cursor: pointer;
    }
`;

const Settings = () => {
    const handleResetLocalStorage = e => {
        localStorage.clear('tasks');
        console.log('Wyczyszczone, zapomniane!');
    }

    return (
        <SettingsContainerStyled>
            <p> Usunięcie wszelkich dotychczas wprowadzonych nawyków: </p>
            <button onClick={e => handleResetLocalStorage(e)}>WYRZUĆ, ZAPOMNIJ</button>
        </SettingsContainerStyled>
    )
}

export default Settings;