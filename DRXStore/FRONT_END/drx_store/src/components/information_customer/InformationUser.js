import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {findCustomer} from "../../service/CustomerService";
import {Link} from "react-router-dom";
import "./information.css"

const InformationUser = () => {
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    const [customer, setCustomer] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <>
            <div className="container" style={{marginTop: 0}}>

                <div className="container">
                    <div className="row profile">

                        <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="profile-userpic">
                                    <img
                                        style={{maxHeight: 325}}
                                        alt=""
                                        className="img-responsive mt-2"
                                        src={customer?.imgCustomer}
                                    />
                                </div>
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">{customer?.name}</div>

                                </div>
                                {/*<div className="profile-userbuttons">*/}
                                {/*    <Link to="/">*/}
                                {/*        <button className="button-modal2" type="button">*/}
                                {/*            Trang chủ*/}
                                {/*        </button>*/}
                                {/*    </Link>*/}
                                {/*    <button className="button-modal2" type="button" onClick={handleLogout}>*/}
                                {/*        Đăng xuất*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="profile-usermenu">
                                    <ul className="nav">
                                        <li>
                                            <p>
                                                <i className="fas fa-lock m-3"/>
                                                Cập nhật thông tin cá nhân
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i className="fas fa-edit m-3"></i>
                                                Thay đổi mật khẩu
                                            </p>
                                        </li>
                                        <li>
                                            <Link to={`/history`} style={{
                                                color: "#212529",
                                                fontSize: 16,
                                                fontFamily: "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",
                                                fontWeight: 400
                                            }}>
                                                <i className="fas fa-history m-3"/> Lịch sử đặt hàng
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="wrapper">
                                <div className="content">
                                    <div className="container bg-white pt-5">
                                        <div className="row px-3 pb-2">
                                            <h1 className="text-center info" style={{marginBottom: 75}}>Thông tin cá
                                                nhân</h1>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Địa chỉ</h4>
                                                <p>{customer?.address}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-phone-alt mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Số điện thoại</h4>
                                                <p>{customer?.phoneNumber}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="far fa-2x fa-envelope mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Email</h4>
                                                <p>{customer?.email}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="far fa-2x fa-heart mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Ngày sinh</h4>
                                                <p>{customer?.dateOfBirth}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-user mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Tài khoản</h4>
                                                <p>{username}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-transgender mb-3 text-primary"/>
                                                <h4 className="font-weight-bold">Giới tính</h4>
                                                <p>{customer?.gender}</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationUser;