import React, {useContext} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Avatar } from "@mui/material";
import {ValueIconCartContext} from "../../ValueIconCartContext";
import "./header.css"
const Header = () => {
    const username = localStorage.getItem("username");
    const account = JSON.parse(localStorage.getItem("account"));
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const roles = [];
    if (account != null) {
        for (let i = 0; i < account.roles.length; i++) {
            roles.push(account.roles[i].authority);
        }
    }
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (
        <div className="container-fluid">
            <div className="navbar">
                <div className="logo">
                    <img src="../../public/DRAGONX_LOGO.png" height={65} width={80} />
                    <img
                        src="../../public/kisspng-macbook-pro-macbook-air-apple-autorized-5b16c01d05e875.1632999215282176290242.png"
                        height={32}
                        width={100}
                    />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="">iPhone</a>{" "}
                        </li>
                        <li>
                            <a href="">iPad</a>{" "}
                        </li>
                        <li>
                            <a href="">Mac</a>{" "}
                        </li>
                        <li>
                            <a href="">Accessories</a>{" "}
                        </li>
                        <li>
                            <a href="">Service</a>{" "}
                        </li>
                        <li>
                            <a href="">News</a>{" "}
                        </li>
                        <li>
                            <a href="">Accessories</a>{" "}
                        </li>
                        <li className="nav-item">
                            {username ? (
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="transparent"
                                        className="d-flex justify-content-center align-items-center border-0"
                                    >
                                        <Avatar>{username[0].toUpperCase()}</Avatar>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {roles.includes("ADMIN") ? (
                                            <Dropdown.Item
                                                to="/admin/employee/list"
                                                className="text-decoration-none"
                                            >
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        <Dropdown.Item className="text-decoration-none">
                                            <Link
                                                to={"/ticket-customer/history"}
                                                className="text-dark text-decoration-none"
                                            >
                                                History
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-decoration-none">
                                            <Link
                                                to={"/customer/change-information/"}
                                                className="text-dark text-decoration-none"
                                            >
                                                Account Manage
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={handleLogout}
                                            className="text-decoration-none"
                                        >
                                            Log out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <Link to="/login" className="nav-link px-2 login-btn text-decoration-none" nav-link link-dark px-2>
                                    My Account
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
                <img src="../../public/shopping-bag.png" height={32} width={32} />
            </div>
        </div>

    )
}

export default Header;