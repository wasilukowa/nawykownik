import React from 'react';
import styled from 'styled-components';

const LegendStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.9);
    .legend-container{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .info-container{
        font-family: 'Playfair Bold';
        font-size: 3em;
        color: #fff;
        z-index: 234234234234;
    }
`;


const Legend = ({ close }) => {
    const handleClose = () => {
        close(false);
    }
    return (
        <LegendStyled >
            <div className='legend-container'>
                <div className='close-button' onClick={handleClose}>CLOSE LEGEND</div>
                <div className='info-container'>
                    <>Witaj w Nawykowniku :)</>
                </div>
            </div>
        </LegendStyled>
    )
}

export default Legend;