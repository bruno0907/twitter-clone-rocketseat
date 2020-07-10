import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
    text-align: center;
    margin-top: 10px;
    padding: 11px 0 15px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    color: var(--twitter);
    border-bottom: solid 2px var(--twitter);

    &:hover{
        background: var(--twitter-dark-hover);
        transition: all 150ms ease-in;
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    
`;