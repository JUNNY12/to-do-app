import styled from "styled-components"


const StyledInput = styled.input`
    border:1px solid green;
    outline:none;
    margin-bottom:1rem;
    height:2rem;

    @media all and (min-width:425px){
        width:25em;
    }
`

const CheckedInput = styled.input`

`

export {StyledInput, CheckedInput}