import "./iphone_list.css"
import React from "react";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

const IPhoneList = () => {
    return (
        <>
            <Header/>
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
            <div className="container-fluid">
                <div className="header">
                    <h1>IPhone</h1>
                </div>
                <div className="products">
                    <div className="product">
                        <div className="image">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg"
                                alt=""
                            />
                        </div>
                        <div className="namePrice">
                            <h3>IPhone 11</h3>
                            <span>23.000.000 VND</span>
                        </div>
                        <p>Iphone 11 128GB Yellow</p>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src="images/iphone2.png" alt=""/>
                        </div>
                        <div className="namePrice">
                            <h3>iphone</h3>
                            <span>$ 120.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-regular fa-star"/>
                        </div>
                        <div className="bay">
                            <button> bay now</button>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src="images/laptop.png" alt=""/>
                        </div>
                        <div className="namePrice">
                            <h3>laptop</h3>
                            <span>$ 150.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                        </div>
                        <div className="bay">
                            <button> Add to cart</button>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src="images/watch3.png" alt=""/>
                        </div>
                        <div className="namePrice">
                            <h3>watch</h3>
                            <span>$ 20.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-solid fa-star"/>
                            <i className="fa-regular fa-star"/>
                        </div>
                        <div className="bay">
                            <button> bay now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default IPhoneList;