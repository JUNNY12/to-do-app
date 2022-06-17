import styled from "styled-components"


const GreetingHeader = styled.span`
    margin-right:0.5rem;
    font-size:clamp(1.5rem, 3vh, 3rem);
    font-style:italic;
`

const UsernameHeader = styled.span`
    font-style:italic;
    font-size:1.5rem;
`

const Header1 = styled.div`
    font-weight:bold;
    font-size:2rem;
    text-align:center;
    margin-top:3rem;
`


export{GreetingHeader, UsernameHeader, Header1}