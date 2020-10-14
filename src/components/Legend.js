import React from 'react';
import styled from 'styled-components';
import { saveArrayToLocalStorage } from '../utilities/localStorageUsage';

const LegendStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.backgroundOpacity};
    display: flex;
    justify-content: center;
    align-items: center;
    .legend-container{
        background-color: ${({ theme }) => theme.backgroundOpacity};
        border: 1px solid ${({ theme }) => theme.colorSecondary};
        max-width: 70vw;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .info-container{
        font-family: 'Playfair Bold';
        font-size: 3em;
        color: ${({ theme }) => theme.colorMain};
        z-index: 234234234234;
    }
`;


const Legend = ({ close }) => {
    const handleClose = () => {
        saveArrayToLocalStorage('legendIsOn', false);
        console.log('save array to LS');
        close(false);
        console.log('close window');
    }
    return (
        <LegendStyled >
            <div className='legend-container'>
                <div className='close-button' onClick={handleClose}>CLOSE LEGEND</div>
                <div className='info-container'>
                    <h1>Witaj w Nawykowniku :)</h1>
                    <p>O monitorowaniu nawyków możesz przeczytać na przykład &nbsp;
                        <a href='https://simplife.pl/2017/10/05/habit-tracker-czyli-jak-skutecznie-kontrolowac-nawyki/' target='_blank' rel="noopener noreferrer">
                            TUTAJ
                        </a>
                    </p>
                    <div className='legeng-container'>
                        <p>
                            Legenda:
                        </p>
                        <div className='legend__not-checked' /><p>Dzień bez oznaczenia czy nawyk był wykonany czy nie</p>
                        <div className='legend__not-done' /><p>Nawyk w tym dniu nie wykonany</p>
                        <div className='legend__done' /><p>Nawyk wykonany, brawo :)</p>
                        <div className='legend__unactive' /><p>Dzień jeszcze nie aktywny :)</p>
                    </div>
                </div>
                <div>
                    <p>Twoje nawyki, archiwum oraz preferencje kolorystyczne przechowywane są w Local Storage.</p>
                    <p>Każdy z nawyków może zostać usunięty lub przeniesiony do kosza.</p>
                    <p>Z poziomu archiwum nawyk może zostać 'przywrócony' do monitorowania w kolejnym miesiącu.</p>
                </div>
                <div>Aplikacja jest nadal w fazie rozwoju :) W razie jakichkolwiek pytań lub sugestii proszę o <a href="mailto:wasiluk.natalia@gmail.com">kontakt</a> :)</div>
            </div>
        </LegendStyled>
    )
}

export default Legend;