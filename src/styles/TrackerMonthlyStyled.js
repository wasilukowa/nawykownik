import styled from 'styled-components';


export const TrackerMonthlyStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .task-date {
        font-family: 'Playfair Regular';
        padding-top: 10px;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.text};
    }
    .task-title {
        font-family: 'Playfair Bold';
        text-align: center;
        font-size: 2em;
        color: ${({ theme }) => theme.colorMain};
        padding: 10px 20px;
    }
    .task-calendar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .task-calendar-days-names {
        display: grid;
        grid-template-columns: repeat(7, ${props => props.theme.cellSmall});
        grid-template-rows: ${props => props.theme.cellSmall};
        gap: ${props => props.theme.gapSmall};

        .day {
        font-family: Arial, sans-serif;
        font-size: 1.2em;
        color: ${props => props.theme.mint};
        align-self: center;
        }
    }
    .task-container___calendar {
        display: grid;
        grid-template-columns: repeat(7, ${props => props.theme.cellSmall});
        grid-template-rows: repeat(6, ${props => props.theme.cellSmall});
        gap: ${props => props.theme.gapSmall};

        .single-day {
        padding: 3px;
        background-color: ${({ theme }) => theme.background};
        font-size: 1.4em;
        color: ${({ theme }) => theme.text};
        padding: 3px;
        text-align: right;
        cursor: pointer;

        &.habit-to-be-checked {
            border: 1.5px solid ${({ theme }) => theme.text};
        }

        &.habit-not-done {
            padding: 3px;
            border: 1.5px solid ${({ theme }) => theme.text};
            display: flex;
            justify-content: center;
            align-items: center;

            &::before {
            content: '';
            display: block;
            height: calc(${props => props.theme.cellSmall} - 10px);
            width: calc(${props => props.theme.cellSmall} - 10px);
            background-color: silver;
            }
        }

        &.habit-done {
            border: 1.5px solid ${({ theme }) => theme.text};
            display: flex;
            justify-content: center;
            align-items: center;

            &::before {
            content: '';
            display: block;
            height: calc(${props => props.theme.cellSmall} - 10px);
            width: calc(${props => props.theme.cellSmall} - 10px);
            background-color: ${({ theme }) => theme.colorMain};
            }
        }
        }

        .un-active {
        background-color: ${({ theme }) => theme.background};
        font-size: 1.4em;
        color: grey;
        padding: 3px;
        text-align: right;
        cursor: pointer;
        border: 1.5px solid ${({ theme }) => theme.textLighter};
        }
    }
    }
    .task-container__buttons {
        color: ${({ theme }) => theme.textLighter};
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;

        .button-subtle{
            padding: 0 0 20px 30px;
            cursor: pointer;
        }
    }
    @media (min-width: 400px) {
        .task-title {
            font-size: 2.4em;
        }

        .task-calendar-days-names {
            grid-template-columns: repeat(7, ${props => props.theme.cellMedium});
            grid-template-rows: ${props => props.theme.cellMedium};
            gap: ${props => props.theme.gapMedium};
        }

        .task-container___calendar {
            grid-template-columns: repeat(7, ${props => props.theme.cellMedium});
            grid-template-rows: repeat(6, ${props => props.theme.cellMedium});
            gap: ${props => props.theme.gapMedium};

            .single-day {

                &.habit-not-done {
                    &::before {
                        content: '';
                        height: calc(${props => props.theme.cellMedium} - 10px);
                        width: calc(${props => props.theme.cellMedium} - 10px);
                    }
                }

                &.habit-done {
                    &::before {
                        content: '';
                        height: calc(${props => props.theme.cellMedium} - 10px);
                        width: calc(${props => props.theme.cellMedium} - 10px);
                    }
                }
            }
        }
    }

    @media (min-width: 650px) {
        .task-title {
            font-size: 3em;
        }

        .task-calendar-days-names {
            grid-template-columns: repeat(7, ${props => props.theme.cellBig});
            grid-template-rows: ${props => props.theme.cellBig};
            gap: ${props => props.theme.gapBig};
        }

        .task-container___calendar {
            grid-template-columns: repeat(7, ${props => props.theme.cellBig});
            grid-template-rows: repeat(6, ${props => props.theme.cellBig});
            gap: ${props => props.theme.gapBig};

            .single-day {
                font-size: 2em;
                &.habit-not-done {
                    &::before {
                        content: '';
                        height: calc(${props => props.theme.cellBig} - 10px);
                        width: calc(${props => props.theme.cellBig} - 10px);
                    }
                }

                &.habit-done {
                    &::before {
                        content: '';
                        height: calc(${props => props.theme.cellBig} - 10px);
                        width: calc(${props => props.theme.cellBig} - 10px);
                    }
                }
            }
            .un-active {
                font-size: 2em;
        }
    }
`;