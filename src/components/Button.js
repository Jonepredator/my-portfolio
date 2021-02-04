import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#E9B872' : 'transparent')};
    white-space: nowrap;
    outline: none;
    border: 1px solid transparent;
    border-radius: 6px;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: ease-in-out .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    color: ${({ primary }) => (primary ? 'black' : '#fff')};
    font-size: 1rem;
    letter-spacing: 0.05rem;
    
    
    &:hover {
        border: 1px solid #fff;
    }
`;