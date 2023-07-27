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
import Cart from "./components/cart/Cart";
import MainLayout from "./components/outlet/MainLayout";
import Drx from "./components/Drx";
import HistoryUser from "./components/history_customer/HistoryUser";
import InformationUser from "./components/information_customer/InformationUser";
import Register from "./components/register/Register";
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
    return (
        <QuantityProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/af" element={<Drx/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    {/* PUBLIC_USER_LISt_IPHONE */}
                    <Route path="/iphone" element={<IPhoneList/>}/>
                    {/* PUBLIC_USER_DETAIL_IPHONE */}
                    <Route path="/iphone/detail/:id" element={<IPhoneDetail/>}/>
                    {/* ADMIN_DISCOUNT */}
                    <Route path="/admin/iphone/list" element={<PhoneListAdmin/>}/>
                    {/* ERROR 401 */}
                    <Route path="/error401" element={<Error401/>}/>
                    {/* CART */}
                    <Route path="/cart" element={<Cart/>}/>
                    {/*HISTORY*/}
                    <Route path="/history" element={<HistoryUser/>}/>
                    {/*INFORMATION_USER*/}
                    <Route path="/information" element={<InformationUser/>}/>
                    {/*REGISTER_USER*/}
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/orderDetail/:totalPrice" element={<PaymentSuccess/>}/>
                </Route>
            </Routes>
        </QuantityProvider>
    );
}

export default App;
