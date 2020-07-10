import styled from 'styled-components';

import { Search } from '../../styles/Icons'

export const Container = styled.div`
    display: none;

    @media (min-width: 1000px){
        display: flex;
        flex-direction: column;
        
        width: min(399px, 100%);

    }
`;
export const SearchWrapper = styled.div`
    padding: 10px 24px;
    width: min(399px, 100%);  
    
    position: fixed;
    top: 0;
    z-index: 2;
    background: var(--primary);

    max-height: 57px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 39px;
    background: var(--search);
    font-size: 14px;
    padding: 0 10px 0 52px;
    border-radius: 19.5px;

    &::placeholder {
        color: var(--gray);
    }

    ~svg {
        position: relative;
        top: -33px;
        left: 15px;
        z-index: 1;
        transition: 180px ease-in-out
    }

    &:focus {
        outline: 1;
        border: solid 2px var(--twitter);

        ~svg {
            fill: var(--twitter);
        }
    }    
`;

export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;
    fill: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;  
    
    > div + div {
        margin-top: 15px;
    }
`;

