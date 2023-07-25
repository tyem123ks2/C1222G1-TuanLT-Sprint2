import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {findAll, findIPhoneById} from "../service/IPhoneService";
import {addCart} from "../service/CartService";

const IPhoneDetail = () => {
    const [product, setProducts] = useState();
    const [listProduct, setListProducts] = useState(null);
    const param = useParams();

    const formatPriceInVND = (price) => {
        return price.toLocaleString("vi-VN", {style: "currency", currency: "VND"});
    }

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await findAll();
                const resId = await findIPhoneById(param.id);
                console.log(resId)
                setProducts(resId);
                setListProducts(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error state or display an error message
            }
        };
        fetchApi();

        const addToCart = () => {
            // Logic to add the product to the cart
            console.log("Product added to cart:", product);
        };

    }, []);
    if (!product) {
        return null
    }
    console.log(product)

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <>
            < Header/>
            {(
                <div
                    className="d-flex justify-content-center"
                    style={{margin: "20px 0"}}
                >
                    <div className="container">
                        <h1 style={{fontSize: 28, marginBottom: 20}}>
                            {product.name}
                        </h1>
                        <div className="row mx-0 ">
                            <div className="col-8">
                                <b>Tên sản phẩm: </b> {product?.name}
                                <br/>
                                <br/>
                                <div className="col-6" style={{display: "inline"}}>
                                    <div>
                                        <p>
                                            <strong>Giá gốc:</strong> {formatPriceInVND(product?.price)}
                                        </p>
                                        <p>
                                            <strong>Giá ưu đãi</strong> {formatPriceInVND(product?.sellPrice)}
                                        </p>
                                        <p>
                                            <strong>Miêu tả: </strong> {formatPriceInVND(product?.description)}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            width: "50%",
                                            marginLeft: "20%",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <img
                                            className="box-shadow-card"
                                            style={{width: "100%", alignContent: "center"}}
                                            src={product?.imgIphone}
                                            alt=""
                                        />
                                    </div>
                                    {/* Add the "Thêm vào giỏ" (Add to Cart) button */}
                                    <button style={buttonStyle} onClick={addCart}>
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            < Footer/>
        </>
    )
}

export default IPhoneDetail;