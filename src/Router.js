import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";

import Find from "./Routes/Find";
import Folio from "./Routes/Folio";

export default ()=>{
    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route path="/" exact={true} element={Find} />
                    {/* <Route path="/folio" exact element={Folio} /> */}
                </Routes>
            </>
        </Router>
    );
};