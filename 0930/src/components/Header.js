import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 10vh;
    background-color: white;
    z-index: 10;
    @media (max-width: 768px) {
        justify-content: center;
        height: 4rem;
    }
`;

const Logo = styled.button`
    font-size: 2rem;
    outline: none;
    border: none;
    background: none;
    font-family: 'Scheherazade New', serif;
    font-weight: 600;
    padding: 1rem;
`;

const Menu = styled.div`
    display: flex;
`;

const Button = styled.button`
    font-size: 1rem;
    outline: none;
    border: none;
    background: none;
    font-family: 'Scheherazade New', serif;
    font-weight: 300;
    padding: 1rem;
    display: block;
    &:hover {
        font-weight: 600;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Header = () => {
    return (
        <Container>
            <Logo>EFUB</Logo>
            <Menu>
                <Button>About</Button>
                <Button>Contents</Button>
                <Button>Contact</Button>
            </Menu>
        </Container>
    );
};

export default Header;