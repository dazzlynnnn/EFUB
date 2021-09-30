import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `
    return acc;
}, {})

const Banner = styled.div`
    text-align: center;
    position: relative;
`;

const Title = styled.h1`
    position: absolute;
    bottom: 100px;
    left: 300px;
    font-weight: 400;
    margin-left: 30px;
    color: white;
    ${
        media.tablet`
        top: 65%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
        text-align: center;
        `
    }
`;

const Background = styled.img`
    height: 50vh;
    width: 80%;
    margin-top: 10vh;
    ${
        media.tablet`
            width: 500px;
            height: 350px;
        `
    }
`;

const Container = styled.div`
    justify-content: center;
    text-align: center;
    position: relative;
`

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 2em;
    width: 55vw;
    height: 50vh;
    ${media.tablet`
        width: 80vw;
        margin-top: 2em;
        height: 30vh;`}
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 25vh;
    background-color: lavender;
    ${media.tablet`
        display: none;`}
    `

const TextWrapper = styled.div`
    text-align: justify;
    width: 30vw;
    margin-left: 3rem;
    ${media.tablet`
        width: 100%;
        margin: 0;
        text-align: center;`}
`


const Contents = () => {
    return (
        <div>
            <Banner>
                <Background src="https://images.otwojob.com/product/v/q/G/vqGjHGz7jcf50Ij.jpg"/>
                <Title>반응형 웹 만들기 실습</Title>
            </Banner>
            <Container>
                <h1 style={{marginTop: "32px"}}>Contents</h1>
                <Wrapper>
                    <Image/>
                    <TextWrapper>
                        <h3>Responsive web design basics</h3>
                        <p>The use of mobile devices to surf the web continues to grow at an astronomical pace, and these devices are often constrained by display size and require a different approach to how content is laid out on the screen.</p>
                    </TextWrapper>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Contents;