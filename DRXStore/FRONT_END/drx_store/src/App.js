import logo from './logo.svg';
import './App.css';
import {QuantityProvider} from "./components/ValueIconCartContext";
import {Route, Routes} from "react-router";
import React from "react";
import Header from "./components/common/header/Header";
import Login from "./components/pages/Login";

function App() {
    return (
        <QuantityProvider>
            <Routes>
                <Route path="/" element={<Header/>}/>
                {/* LOGIN_REGISTER */}
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </QuantityProvider>
    );
}

export default App;
