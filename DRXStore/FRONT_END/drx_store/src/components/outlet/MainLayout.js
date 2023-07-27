import Header from "../common/header/Header";
import React from "react";
import {Outlet} from "react-router";
import Footer from "../common/footer/Footer";

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