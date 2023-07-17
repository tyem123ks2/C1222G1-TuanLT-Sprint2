import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ToastContainer, toast} from "react-toastify";
import {handleCallApiLogin, handleCallApiToCreateAccountFb} from "../../service/LoginService";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {receiveAccount} from "../../redux/action";
import "./index.css"


const Login = () => {
    const [failedAccount, setFailedAccount] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [accountFacebook, setAccountFacebook] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCreateAccountByFacebook = () => {
        handleCallApiToCreateAccountFb(accountFacebook)
            .then((e) => {
                console.log(e);
                if (e.status === 201) {
                    toast.warn("Tạo tài khoản " + accountFacebook.email + " thành công.");
                } else {
                    toast.error(
                        accountFacebook.email +
                        " đã tồn tại. Vui lòng đăng ký tài khoản để tiếp tục sử dụng các dịch vụ."
                    );
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required("Tên đăng nhập bắt buộc phải nhập.")
                        .test(
                            "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                            "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                            function (value) {
                                return value.length >= 6 && value.length <= 30;
                            }
                        ),
                    password: Yup.string()
                        .required("Mật khẩu bắt buộc phải nhập.")
                        .test(
                            "Mật khẩu bắt buộc từ 6-30 ký tự.",
                            "Mật khẩu bắt buộc từ 6-30 ký tự.",
                            function (value) {
                                return value.length >= 6 && value.length <= 30;
                            }
                        ),
                })}
                onSubmit={(values) => {
                    handleCallApiLogin(values)
                        .then((e) => {
                            console.log(e);
                            setFailedAccount(null);
                            localStorage.setItem("token", e.token);
                            localStorage.setItem("username", e.username);
                            localStorage.setItem("account", JSON.stringify(e));
                            dispatch(receiveAccount(e));
                            window.location.href = "/";
                        })
                        .catch((e) => {
                            setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
                        });
                }}>
                <div className="container">
                    <div className="item">
                        <h2 className="logo">Welcome to DRX-Store!</h2>
                        <div className="text-item">
                            <img src="../../public/DRAGONX_LOGO.png" height={257} width={257}/>
                            <p>
                                Please login to DRXStore to order and receive offers from the store!
                            </p>
                            <div className="social-icon">
                                <a href="#">
                                    <i className="bx bxl-facebook"/>
                                </a>
                                <a href="#">
                                    <i className="bx bxl-twitter"/>
                                </a>
                                <a href="#">
                                    <i className="bx bxl-youtube"/>
                                </a>
                                <a href="#">
                                    <i className="bx bxl-instagram"/>
                                </a>
                                <a href="#">
                                    <i className="bx bxl-linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="login-section">
                        <div className="form-box login">
                            <Form action="">
                                <h2>Sign In</h2>
                                <div className="input-box">
                                    <span className="icon">
                                    <i className="bx bxs-envelope"/>
                                    </span>
                                    <input type="password" style={{color: "white"}} required=""/>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-box">
                                      <span className="icon">
                                        <i className="bx bxs-lock-alt"/>
                                      </span>
                                    <input type="password" style={{color: "white"}} required=""/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="remember-password">
                                    <label htmlFor="">
                                        <input type="checkbox"/>
                                        Remember Me
                                    </label>
                                    <a href="#">Forget Password</a>
                                </div>
                                <button type="submit"
                                        className="btn">Login</button>
                                <div className="create-account">
                                    <p>
                                        Create A New Account?{" "}
                                        <a href="#" className="register-link">
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </Form>
                        </div>
                        <div className="form-box register">
                            <form action="">
                                <h2>Sign Up</h2>
                                <div className="input-box">
          <span className="icon">
            <i className="bx bxs-user"/>
          </span>
                                    <input type="text" required=""/>
                                    <label>Username</label>
                                </div>
                                <div className="input-box">
          <span className="icon">
            <i className="bx bxs-envelope"/>
          </span>
                                    <input type="email" required=""/>
                                    <label>Email</label>
                                </div>
                                <div className="input-box">
          <span className="icon">
            <i className="bx bxs-lock-alt"/>
          </span>
                                    <input type="password" required=""/>
                                    <label>Password</label>
                                </div>
                                <div className="remember-password">
                                    <label htmlFor="">
                                        <input type="checkbox"/>I agree with this statment
                                    </label>
                                </div>
                                <button className="btn">Register</button>
                                <div className="create-account">
                                    <p>
                                        Already Have An Account?{" "}
                                        <a href="#" className="login-link">
                                            Sign In
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Login;