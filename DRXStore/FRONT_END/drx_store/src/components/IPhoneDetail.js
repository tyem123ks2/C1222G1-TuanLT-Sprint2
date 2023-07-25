import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {findAll, findIPhoneById} from "../service/IPhoneService";
import {addCart, findCartByCustomerId} from "../service/CartService";
import Swal from "sweetalert2";
import {ValueIconCartContext} from "./ValueIconCartContext";
import {Link} from "react-router-dom";
import "./detail.css"

const IPhoneDetail = () => {
    const param = useParams();
    const token = localStorage.getItem("token");
    const [phone, setPhone] = useState(null);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const username = localStorage.getItem("username");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        (async () => {
            const result = await findIPhoneById(param.id);
            setPhone(result);
        })()
    }, [param.id]);


    const handleIncrease = () => {
        if (quantity < phone.quantity) {
            setQuantity(quantity + 1);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= phone.quantity) {
            setQuantity(newQuantity);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };
    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCartByCustomerId(token);
                const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
                setIconQuantity(totalQuantity);
            })() : setIconQuantity(0)
        }

    }, []);
    const handleAddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            phoneDetail: ""
        }
        try {
            await addCart({...cart, quantity: quantity, phoneDetail: id}, token);
            setIconQuantity(iconQuantity + 1)
            Swal.fire({
                title: 'Thông báo',
                text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } catch (err) {
            console.log(err)
        }
    }
    if (!phone) {
        return null;
    }
    console.log(quantity);

    return (
        <>
            < Header/>
            <div className="container container-detail">
                <div className="row">
                    <div className="col-4">
                        <img src={phone?.imgIphone} height="400px" width="400px" alt=""/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h2 className="detail-font">{phone.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <hr className="hr-detail"></hr>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th colSpan={2} style={{textAlign: "center"}}>Chi tiết sản phẩm</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>Giá:</th>
                                                <td>{phone.price.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}</td>
                                            </tr>
                                            <tr>
                                                <th>Giá khuyến mãi:</th>
                                                <td>{phone.sellPrice.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}</td>
                                            </tr>
                                            <tr>
                                                <th>Miêu tả:</th>
                                                <td>{phone.description}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col">
                                        <p className="p-quantity">SỐ LƯỢNG:</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <div style={{marginTop: 20, display: 'flex', alignItems: 'center'}}>
                                                    <a className="a-cart" style={{fontSize: 40}} onClick={() => handleDecrease()}>-</a>
                                                    <input
                                                        type="text"
                                                        style={{fontSize: 40, width: 40, height: 40, textAlign: 'center'}}
                                                        className="input-c"
                                                        onChange={(event) => handleInputChange(event)}
                                                        value={quantity}
                                                    />
                                                    <a className="a-cart" style={{fontSize: 40}} onClick={() => handleIncrease()}>+</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        {username ? (
                                            <div className="row" style={{marginTop: 20}}>
                                                <div className="col">
                                                    <button className="button-add"
                                                            onClick={() => handleAddCart(phone?.id)}>THÊM VÀO GIỎ HÀNG
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row" style={{marginTop: 20}}>
                                                <div className="col">
                                                    <Link to="/login">
                                                        <button className="button-add">THÊM VÀO GIỎ HÀNG</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col">
                                <hr className="hr-detail"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer/>
        </>
    )
}

export default IPhoneDetail;