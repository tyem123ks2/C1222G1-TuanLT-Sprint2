
import './App.css';
import {QuantityProvider} from "./components/ValueIconCartContext";
import {Route, Routes} from "react-router";
import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProductListUser from "./components/IPhoneList";
import IPhoneList from "./components/IPhoneList";

function App() {
    return (
        <QuantityProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* LOGIN_REGISTER */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/iphone" element={<IPhoneList />}/>
            </Routes>
        </QuantityProvider>
    );
}

export default App;
