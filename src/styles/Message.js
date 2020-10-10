import styled from 'styled-components';

export const MessageStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding-top: 4em;
        font-family: 'Playfair Bold';
        font-size: 1.2em;
        color: ${({ theme }) => theme.colorMain};
        text-align: center;
    }
    .nav__router-link {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        padding: 0.6em;
        font-size: 1.2em;
        transition: .7s;
        text-align: center;
        &:hover{
            color: ${({ theme }) => theme.colorMain};
            transform: scale(1.1);
        }
    }
    @media (min-width: 250px) {
        p {
            font-size: 1.8em;
        }
        .nav__router-link {
            font-size: 1.6em;
        }
    }
    @media (min-width: 400px) {
        p {
            font-size: 2.2em;
        }
        .nav__router-link {
            font-size: 2.2em;
        }
    }
`;