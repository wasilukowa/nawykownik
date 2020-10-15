import styled from 'styled-components';

export const WrapperMain = styled.div`
  min-height: 100vh;
  padding: 0.4em;
  background-image: ${({ theme }) => theme.backgroundLinear};
  color: ${({ theme }) => theme.backgroundLinear};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 1;

.button-container{
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
}
  button {
    width: 100%;
    max-width: 400px;
    min-height: 40px;
    margin: 2px;
    padding: 2px 5px;
    border: none;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    font-family: 'Playfair Regular';
    font-size: 1em;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media (min-width: ${({ theme }) => theme.sizeFirst}) {
    padding: 20px;
    ..button-container {
      button {
        padding: 5px 10px;
        font-size: 1.4em;
      }
    }
  }
`;

export const WrapperInside = styled.div`
  min-height: calc(100vh - 100px);
  width: 90%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10px;
  margin-bottom: 0.6em;

  /* @media (min-width: ${({ theme }) => theme.sizeFirst}) {
    padding: 20px;
  } */
`;