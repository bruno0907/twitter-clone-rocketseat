import styled from 'styled-components';

interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
    color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'};
    border: ${props => props.outlined ? 'solid 1px var(--twitter)' : 'none'};
    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    &:hover{
        background: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
        transition: all 300ms;
    }
`;