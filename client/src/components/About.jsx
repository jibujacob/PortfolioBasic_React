import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
`

const Left = styled.div`
    flex:1;
`

const Right = styled.div`
    flex:1;
`
 
export const About = () => {
    return (
        <Container>
            <Left></Left>
            <Right></Right>
        </Container>
    )
}
