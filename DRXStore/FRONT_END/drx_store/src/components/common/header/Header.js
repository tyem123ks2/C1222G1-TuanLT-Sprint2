import React, {useContext} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {Link, useLocation} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {Avatar} from "@mui/material";
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
            <div className="navbar-header">
                <div className="logo">
                    <img src="/DragonXX.png" height={65} width={110}/>
                    <img
                        src="kisspng-macbook-pro-macbook-air-apple-autorized-5b16c01d05e875.1632999215282176290242.png"
                        height={32}
                        width={100}
                    />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="" style={{color: "#d2d2d7"}}>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/iphone" className="" style={{color: "#d2d2d7"}}>iPhone</Link>
                        </li>
                        <li>
                            <Link to="/ipad" className="" style={{color: "#d2d2d7"}}>iPad</Link>
                        </li>
                        <li>
                            <Link to="/mac" className="" style={{color: "#d2d2d7"}}>Mac</Link>
                        </li>
                        <li>
                            <Link to="/" className="" style={{color: "#d2d2d7"}}>Phụ kiện</Link>
                        </li>
                        <li>
                            <Link to="/service" className="" style={{color: "#d2d2d7"}}>Dịch vụ</Link>
                        </li>
                        <li>
                            <Link to="/news" className="" style={{color: "#d2d2d7"}}>Tin tức</Link>
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
                                                <Link
                                                    to="/admin/employee/list"
                                                    className="text-dark text-decoration-none"
                                                >
                                                    Quản lý nhân viên
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("ADMIN") ? (
                                            <Dropdown.Item className="text-decoration-none">
                                                <Link
                                                    to={"/admin/iphone/list"}
                                                    className="text-dark text-decoration-none"
                                                >
                                                    Quản lý sản phẩm
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("ADMIN") ? (
                                            <Dropdown.Item className="text-decoration-none">
                                                <Link
                                                    className="text-dark text-decoration-none"
                                                    to={"/admin/customer/list"}
                                                >
                                                    Quản lý khách hàng
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("USER") ? (
                                            <Dropdown.Item className="text-decoration-none">
                                                <Link
                                                    to={"/information"}
                                                    className="text-dark text-decoration-none"
                                                >
                                                    Quản lý tài khoản
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("USER") ? (
                                            <Dropdown.Item className="text-decoration-none">
                                                <Link
                                                    to={"/history"}
                                                    className="text-dark text-decoration-none"
                                                >
                                                   Lịch sử mua hàng
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("ADMIN") ? (
                                            <Dropdown.Item className="text-decoration-none">
                                                <Link
                                                    to={"/admin/statistic-film"}
                                                    className="text-dark text-decoration-none"
                                                >
                                                    Thống kê
                                                </Link>
                                            </Dropdown.Item>
                                        ) : (
                                            ""
                                        )}
                                        {roles.includes("ADMIN")? (
                                            <Dropdown.Divider/>
                                        ) : (
                                            ""
                                        )}
                                        <Dropdown.Item
                                            onClick={handleLogout}
                                            className="text-decoration-none"
                                        >
                                            Đăng xuất
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <Link to="/login" style={{color: "Yellow"}} className="nav-link px-2 login-btn text-decoration-none" nav-link
                                      link-dark px-2>
                                    Đăng nhập
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
                <Link to="/cart">
                    <img src="shopping-bag.png" height={32} width={32} alt="Shopping Bag"/>
                </Link>
            </div>
        </div>

    )
}

export default Header;