import styled from 'styled-components';

export const WrapperMain = styled.div`
  min-height: 100vh;
  background-image: ${({ theme }) => theme.backgroundLinear};
  color: ${({ theme }) => theme.backgroundLinear};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 1;
  padding: 0.4em;

  button {
    width: 100%;
    max-width: 400px;
    min-height: 40px;
    padding: 5px 10px;
    border: none;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    font-family: 'Playfair Regular';
    font-size: 1.4em;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media (min-width: 320px) {
    padding: 20px;
  }
`;

export const WrapperInside = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: calc(100vh - 100px);
  width: 100%;
  max-width: 1200px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  margin-bottom: 0.6em;
`;