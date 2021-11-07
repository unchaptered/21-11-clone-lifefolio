import styled from "styled-components";

const Scroll=styled.div`
    width:100%;
    height: 15px;
    border: 1px solid black;
    /* background-color:black; */
`;

export default ({text, onClick=null})=>{
    return (
        <Scroll onClick={onClick}>
        </Scroll>
    );
};