import styled from "styled-components"


const Paragraph = styled.p`
    text-align:center;
    font-style:italic;
    font-size:1rem;
    font-weight:bold;
    color:palevioletred;
`

const Paragraph2 = styled(Paragraph)`
    color:green;
`

const IconWrapper = styled.p`
    cursor:pointer;
    color:red;

`

export {Paragraph,IconWrapper , Paragraph2}