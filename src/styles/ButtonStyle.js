import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colorSecondary};
    color: ${({ theme }) => theme.colorMain};
    font-family: 'Playfair Bold';
    font-size: 2em;
    padding: 1em;
    width: 100%;
    cursor: pointer;
`;