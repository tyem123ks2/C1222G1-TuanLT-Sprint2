
import './App.css';
import {QuantityProvider} from "./components/ValueIconCartContext";
import {Route, Routes} from "react-router";
import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProductListUser from "./components/IPhoneList";
import IPhoneList from "./components/IPhoneList";
import IPhoneDetail from "./components/IPhoneDetail";
import PhoneListAdmin from "./components/role_admin/PhoneListAdmin";
import Error401 from "./components/Error401";
import Cart from "./components/Cart";

function App() {
    return (
        <QuantityProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* LOGIN_REGISTER */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/iphone" element={<IPhoneList />}/>
                <Route path="/iphone/detail/:id" element={<IPhoneDetail/>}/>

                {/* ADMIN_DISCOUNT */}
                <Route path="/admin/iphone/list" element={<PhoneListAdmin />} />

                {/* ERROR 401 */}
                <Route path="/error401" element={<Error401 />} />
                {/* CART */}
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </QuantityProvider>
    );
}

export default App;
