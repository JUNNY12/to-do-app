import styled from "styled-components"


const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const TodoForm = styled(Form)`
    flex-direction:row;
    column-gap:5%;
    justify-content:center;
    margin-top:3rem;

`

export {Form, TodoForm}