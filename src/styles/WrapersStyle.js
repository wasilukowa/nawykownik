import styled from 'styled-components';

export const WrapperMain = styled.div`
  min-height: 100vh;
  background-image: ${({ theme }) => theme.backgroundLinear};
  color: ${({ theme }) => theme.backgroundLinear};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 2em;

  button {
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.background};
        font-family: 'Playfair Bold';
        font-size: 2em;
        padding: 0.6em 1.2em;
        margin-top: 20px;
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
  min-height: 80vh;
  width: 100vh;
  max-width: 900px;
  min-width: 260px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
`;