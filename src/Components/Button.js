import styled from "styled-components";

const Button=styled.button`
font-size: 14px;
width: auto;
padding: 5px;
margin: 0 5px;
transition: all 0.2s linear;
&:hover{
    font-weight: 600;
}
`;

export default ({text, onClick})=>{
    return (
        <Button onClick={onClick}>{text}</Button>
    );
};