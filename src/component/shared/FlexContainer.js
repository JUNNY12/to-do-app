import styled from "styled-components"


const FlexContainer = styled.div`
    display:flex;
    column-gap:5%;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
    padding:0.5rem;
    background:#90EE90;
    box-shadow:1px 1px 2px black;
    &.completed{
        background:#ffcccb;
        text-decoration:line-through;
    }
`

export default FlexContainer
