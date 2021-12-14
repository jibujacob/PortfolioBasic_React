import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    height:100vh;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`

const LeftWrapper = styled.div`
    padding:50px;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const Salutation = styled.h2`
    font-size:30px;
    font-weight:300;
`

const Name = styled.h1`
    font-size:60px;
`

const Title = styled.div`
    height:50px;
    overflow:hidden;
`

const TitleWrapper = styled.div`
    height:100%;
    animation:move 3s ease-in-out infinite alternate;

    @keyframes move{
        50%{
            transform:translateY(-50px);
        }
        100%{
            transform:translateY(-100px);
        }
    }
`

const TitleItem = styled.div`
    height: 50px;
    font-size:30px;
    font-weight:bold;
    color:#59b256;
    display:flex;
    align-items:center;
`

const ExperienceDescription = styled.p`

`

const Right = styled.div`
    flex:1;
`

const RightWrapper = styled.div`

`

export const Intro = () => {
    return (
        <Container>
            <Left>
                <LeftWrapper>
                    <Salutation>Hello, My name is</Salutation>
                    <Name>Jibu Jacob</Name>
                    <Title>
                        <TitleWrapper>
                            <TitleItem>Full Stack Developer</TitleItem>
                            <TitleItem>Data Engineer</TitleItem>
                            <TitleItem>Backend Developer</TitleItem>
                        </TitleWrapper>
                    </Title>
                    <ExperienceDescription>
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and
                        online stores.
                    </ExperienceDescription>
                </LeftWrapper>
            </Left>
            <Right>
                <RightWrapper>
                    {/*    */}
                </RightWrapper>
            </Right>
        </Container>
    )
}
