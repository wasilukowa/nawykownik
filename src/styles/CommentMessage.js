import styled from 'styled-components';

export const CommentMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 2em;
    padding-top: 2em;
    color: ${({ theme }) => theme.colorSecondary}
`;