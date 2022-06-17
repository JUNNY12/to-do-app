import styled from "styled-components"

const Button = styled.button`
    border:1px solid palevioletred;
    outline:none;
    width:100%;
    height:2rem;
    font-weight:bold;
    cursor:pointer;

    @media all and (min-width:425px){
        width:25em;
    }
`

const AddButton = styled(Button)`
width:3rem;
`


export {Button, AddButton}