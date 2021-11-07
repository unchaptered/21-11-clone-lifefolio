import styled from "styled-components";

const MainPoster=styled.button`
    padding-top: 66.67%;
    width: 100%;
    height: 0;
    position: relative;
    border: 1px solid black;
    /* background-color: tomato; */
    & > div {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }
`;

export default ({text, onClick=null})=>{
    return (
        <MainPoster onClick={onClick}>
            <div>{text}</div>
        </MainPoster>
    );
};