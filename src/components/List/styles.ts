import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--secondary);
    border-radius: 14px;
`;

export const Item = styled.div`
    padding: 10px 16px;  

    & + div {
        border-top: solid 1px var(--outline);
        cursor: pointer;

        &:hover{
            background: var(--search);
            transition: 300ms;
        }

    }

    &:first-child { 
        padding-top: 13px;
        border-radius: 14px 14px 0 0;
    }

    &:last-child {
        padding-bottom: 17px;
        border-radius: 0 0 14px 14px;
    }
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 19px;
`;

export const ShowMore = styled.span`
    font-size: 14px;
    color: var(--twitter);
`;