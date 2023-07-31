import Header from "../pages/header/Header";
import React from "react";
import {Outlet} from "react-router";
import Footer from "../pages/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout;