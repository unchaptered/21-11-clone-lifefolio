import styled from "styled-components";

const Poster=styled.button`
    border: 1px solid black;
    @media screen and (max-width: 1200px){
        padding-top: 66.67%;
        width: 100%;
        height: 0;
        position: relative;
        & > div {
            position: absolute;
            top:0;
            left:0;
        }
    }
`;

export default ({text, onClick=null})=>{
    return (
        <Poster onClick={onClick}>
            <div>{text}</div>
        </Poster>
    );
};