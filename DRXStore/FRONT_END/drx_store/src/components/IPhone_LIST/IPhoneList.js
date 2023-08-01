import "../role_admin/iphone_list.css"
import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {ValueIconCartContext} from "../ValueIconCartContext";
import {Formik, Form, Field} from "formik";
import {findAll, findAllIPhone, findIPhoneById} from "../../service/IPhoneService";
import "./list.css"

const IPhoneList = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [selectedOption, setSelectedOption] = useState("all");
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const productList = async () => {
        const result = await findAll();
        setProducts(result.content);
    };

    const [pageCount, setPageCount] = useState(0);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const [request, setRequest] = useState({
        page: 0,
        name: "",
        idType: 0
    })
    const token = localStorage.getItem("token");

    const handlePageOnclick = (event) => {
        setRequest((prev) => ({...prev, page: event.selected}))
    }

    const handleDetail = async (id) => {
        navigate(`/iphone/detail/${id}`);
    }

    useEffect(() => {
        productList();
    }, [])

    const handleLoadMore = () => {
        setVisibleProducts(visibleProducts + 6); // Increase the number of visible products by a predefined increment
    };

    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleProductLineSearch = async (productLine) => {
        const result = await findAllIPhone(productLine, 0);
        setProducts(result.data.content);
    };

    return (
        <>
            <div className="container-fluid">
                <div
                    id="carouselExampleControlsNoTouching"
                    className="carousel slide"
                    data-bs-touch="false"
                    data-bs-interval="false"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://shopdunk.com/images/uploaded/Home%20banner%20T7%202023/banner%20iphone%2014%20Pro%20Max%20PC7.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://shopdunk.com/images/uploaded/Home%20banner%20T7%202023/banner%20ipad%20gen%209%20PC7.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://shopdunk.com/images/uploaded/Home%20banner%20T7%202023/banner%20watch%20t7_Banner%20PC7.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-fluid py-1">
                <div className="card-header text-center">
                    <h2>iPhone</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary me-2"
                                        onClick={() => handleProductLineSearch("")}
                                    >
                                        Tất cả
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary me-2"
                                        onClick={() => handleProductLineSearch("iPhone 14")}
                                    >
                                        iPhone 14 series
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary me-2"
                                        onClick={() => handleProductLineSearch("iPhone 13")}
                                    >
                                        iPhone 13 series
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary me-2"
                                        onClick={() => handleProductLineSearch("iPhone 12")}
                                    >
                                        iPhone 12 series
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <li className="list-inline-item">
                                <Formik
                                    initialValues={{
                                        name: "",
                                    }}
                                    onSubmit={(value) => {
                                        const search = async () => {
                                            const rs = await findAllIPhone(value.name, 0);
                                            if (rs.data.content.length === 0) {
                                                setShowMessage(true);
                                            } else {
                                                setShowMessage(false);
                                                setProducts(rs.data.content);
                                            }
                                        };
                                        search();
                                    }}
                                >
                                    <Form className="justify-content-end">
                                        <div
                                            className="form-group justify-content-end"
                                            style={{
                                                paddingLeft: 80,
                                            }}
                                        >
                                            <i className="ti-search ti-search1"/>
                                            <Field
                                                type="text"
                                                className="form-control float-start me-3"
                                                style={{
                                                    width: "255%",
                                                    paddingLeft: 35,
                                                    height: "38px",
                                                }}
                                                name="name"
                                                aria-describedby="helpId"
                                                placeholder="Tìm theo tên iPhone..."
                                            />
                                        </div>
                                    </Form>
                                </Formik>
                            </li>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                {showMessage && (
                                    <div className="justify-content-center">
                                        <div className="row">
                                            <span id="empty">Product name not found!</span>
                                        </div>

                                        <div className="row">
                                            <button
                                                className="btn btn-outline-primary ms-3"
                                                onClick={() => setShowMessage(false)}
                                            >
                                                Return to Product List
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {!showMessage && products.slice(0, visibleProducts).map((product) => (
                            <div className="col-md-3 my-3" key={product.id}>
                                <div className="container">
                                    <div className="card">
                                        <div className="card-iphone">
                                            <div className="iphone-img" onClick={() => handleDetail(product.id)}>
                                                <img
                                                    src={product.imgIphone}
                                                    alt={product.imgIphone}/>
                                            </div>
                                            <div className="iphone-info">
                                                <h4>{product.name}</h4>
                                                {product.price && (
                                                    <h4 style={{textDecoration: 'line-through', color: "#515154"}}>
                                                        {product.price.toLocaleString("vi-VN", {
                                                            style: "currency",
                                                            currency: "VND",
                                                        })}
                                                    </h4>
                                                )}
                                                <h5>{product.sellPrice.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}</h5>
                                            </div>
                                            {/*<div className="btn">*/}
                                            {/*    <button type="button">Thêm vào giỏ</button>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showMessage && visibleProducts < products.length && (
                        <div className="d-grid col-2 m-auto" style={{marginLeft: "0", marginTop: 10}}>
                            <button
                                type="button"
                                onClick={handleLoadMore}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default IPhoneList;