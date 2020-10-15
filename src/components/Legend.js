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
    }
    .legend-subcontainer{
        background-color: ${({ theme }) => theme.background};
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        padding: 0.6em;
    }
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 2em;
        color: ${({ theme }) => theme.colorMain}
    }
    .info-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .legend__title { 
        color: ${({ theme }) => theme.colorMain};
        font-size: 1.4em;
        font-family: 'Playfair Bold';
    }
    .legend__text {
        margin-top: 0.4em;
        font-family: 'Playfair Regular';
        font-size: 0.8em;
        color: ${({ theme }) => theme.text};
        &.bold {
            margin-top: 1em;
            font-family: 'Playfair Bold';
        }
        a {
            font-family: 'Playfair Bold';
            color: ${({ theme }) => theme.colorMain};
            text-decoration: none;
        }   
    }
    .legend__row {
        display: flex;
        align-items: center;
        .legend-square {
            flex-shrink: 0;
            height: ${props => props.theme.cellSmall};
            width: ${props => props.theme.cellSmall};
            border: 1px solid ${({ theme }) => theme.textLighter};
            margin: 5px 5px 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            &.not-checked{
                text-align: right;
                padding: 2px;
            }
            &.not-done{
                &::before {
                content: '';
                display: block;
                height: calc(${props => props.theme.cellSmall} - 10px);
                width: calc(${props => props.theme.cellSmall} - 10px);
                background-color: ${({ theme }) => theme.colorHabitNotDone};
                }
            }
            &.done{
                &::before {
                content: '';
                display: block;
                height: calc(${props => props.theme.cellSmall} - 10px);
                width: calc(${props => props.theme.cellSmall} - 10px);
                background-color: ${({ theme }) => theme.colorMain};
            }
            }
            &.un-active{
                background-color: ${({ theme }) => theme.background};
                color: ${({ theme }) => theme.textLighter};
                padding: 3px;
                text-align: right;
                cursor: pointer;
                border: 1px solid ${({ theme }) => theme.textLighter};
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.sizeFirst}) {
        .legend-subcontainer {
            border: 1px solid ${({ theme }) => theme.colorSecondary};
            height: auto;
            max-width: 80vw;
            max-height: 85vh;
            padding: 4em 1.2em;
        }
        .legend__title{
            font-size: 2em;
        }
        .legend__text {
            font-size: 1.2em;
        }
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
            <div className='legend-subcontainer'>
                <div className='close-button' onClick={handleClose}>&#10006;</div>
                <div className='info-container'>
                    <h1 className='legend__title'>Witaj w Nawykowniku :)</h1>
                    <p className='legend__text'>O monitorowaniu nawyków możesz przeczytać na przykład &nbsp;
                        <a href='https://simplife.pl/2017/10/05/habit-tracker-czyli-jak-skutecznie-kontrolowac-nawyki/' target='_blank' rel="noopener noreferrer">
                            TUTAJ
                        </a>
                    </p>
                    <div>
                        <p className='legend__text bold'>
                            Legenda:
                        </p>
                        <div className='legend__row'>
                            <div className='legend-square not-checked' >6</div><p className='legend__text'>Dzień bez oznaczenia czy nawyk był wykonany czy nie</p>
                        </div>
                        <div className='legend__row'>
                            <div className='legend-square not-done' /><p className='legend__text'>Nawyk w tym dniu nie wykonany</p>
                        </div>
                        <div className='legend__row'>
                            <div className='legend-square done' /><p className='legend__text'>Nawyk wykonany, brawo :)</p>
                        </div>
                        <div className='legend__row'>
                            <div className='legend-square un-active'>6</div><p className='legend__text'>Dzień z przyszłości, jeszcze nie aktywny</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='legend__text'>Twoje nawyki, archiwum oraz preferencje kolorystyczne przechowywane są w Local Storage.</p>
                    <p className='legend__text'>Każdy z nawyków może zostać usunięty lub przeniesiony do kosza.</p>
                    <p className='legend__text'>Z poziomu archiwum nawyk może zostać 'przywrócony' do monitorowania w kolejnym miesiącu.</p>
                </div>
                <p className='legend__text'>Aplikacja jest nadal w fazie rozwoju :) W razie jakichkolwiek pytań lub sugestii proszę o <a href="mailto:wasiluk.natalia@gmail.com">kontakt</a> :)</p>
            </div>
        </LegendStyled>
    )
}

export default Legend;