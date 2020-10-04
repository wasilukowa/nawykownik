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
        font-size: 2em;
        color: ${props => props.theme.green};
        text-align: center;
    }
    .nav__router-link {
        text-decoration: none;
        color: ${props => props.theme.black};
        padding: 0.6em;
        font-size: 1.4em;
        transition: .7s;
        &:hover{
            color: ${props => props.theme.green};
            transform: scale(1.1);
        }
    }
`;