import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ALink=styled(Link)`
font-size: 14px;
width: auto;
padding: 5px;
margin: 0 5px;
transition: all 0.2s linear;
&:hover{
    font-weight: 600;
}
`;

export default ({
    text="미정",
    to="/",
})=>{
    return(
        <ALink to={to}>{text}</ALink>
    );
};

