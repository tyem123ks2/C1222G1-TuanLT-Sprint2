import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./home.css"
import React from "react";
const Home = () => {
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
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="container-fluid py-1">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2 style={{ color: "#0b5ed7" }}>
                                DRX STORE - ĐẠI LÝ ỦY QUYỀN APPLE CHÍNH HÃNG
                            </h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "#0b5ed7" }}>
                                DRAGON-X STORE
                            </h5>
                            <p className="card-text">
                                Năm 2020, DRX Store trở thành đại lý ủy quyền của Apple.
                            </p>
                            <p className="card-text">
                                Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store
                                nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple
                                cho người dùng Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-1">
                    <div className="card-header text-center">
                        <h2>iPhone</h2>
                    </div>
                    <div className="item-list">
                        <div className="category-item">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg"
                                alt="iPhone 11"
                            />
                            <h3>iPhone 11</h3>
                            <p>The iPhone 11 with a dual-camera system.</p>
                            <p>13.000.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg"
                                alt="iPhone 12"
                            />
                            <h3>iPhone 12</h3>
                            <p>The iPhone 12 with 5G capability.</p>
                            <p>16.000.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"
                                alt="iPhone 13"
                            />
                            <h3>iPhone 13 Pro Max</h3>
                            <p>The latest iPhone model with advanced features.</p>
                            <p>23.000.000 VNĐ</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/iphone">Xem tất cả IPhone</a>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="card-header text-center">
                        <h2>iPad</h2>
                    </div>
                    <div className="item-list">
                        <div className="category-item">
                            <img
                                src="https://shopdunk.com/images/thumbs/0007302_ipad-pro-m2-129-inch-wifi-128gb_550.png"
                                alt=""
                            />
                            <h3>iPad Pro M2 12.9 inch WiFi 128GB</h3>
                            <p>iPad Pro 12.9 inch và 11 inch mới, nay có chip M2.</p>
                            <p>28.390.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://shopdunk.com/images/thumbs/0010884_ipad-pro-m1-129-inch-wifi-cellular-512gb_550.webp"
                                alt=""
                            />
                            <h3>iPad Pro M1 12.9 inch WiFi Cellular 512GB</h3>
                            <p>iPad Pro 11 inch Gen 1 Wifi 64GB Space Gray Zin Đẹp 99%</p>
                            <p>35.950.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://shopdunk.com/images/thumbs/0007198_ipad-pro-m2-11-inch-wifi-cellular-128gb_550.webp"
                                alt="iPhone 13"
                            />
                            <h3>iPad Pro M2 11 inch WiFi Cellular 128GB</h3>
                            <p>iPad Pro M1 11 inch Wifi 128GB (2021)</p>
                            <p>23.990.000 VNĐ</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#">Xem tất cả IPad</a>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="card-header text-center">
                        <h2>MacBook</h2>
                    </div>
                    <div className="item-list">
                        <div className="category-item">
                            <img
                                src="https://product.hstatic.net/200000722513/product/0-mgnd3sa-a-m1-8gb-256gb-gpu-7-core-2_ba8ac3bbbae7430cacd13bc26bdc3417_bb35895dc5404d5c81945aa69ce87d02_master.png"
                                alt=""
                            />
                            <h3>MacBook Air M1</h3>
                            <p>MacBook Air M1 2020 7GPU 8GB 256GB MGND3SA/A - Gold</p>
                            <p>18.500.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://product.hstatic.net/200000722513/product/cbook-air-m2-10gpu-8gb-512gb-silver-2_9996b049f85648169fad6e9f71ed1bc1_6c61a5a4d2a44212af3826b301a4af43_master.jpg"
                                alt=""
                            />
                            <h3>Macbook Air M2</h3>
                            <p>Macbook Air M2 8GPU 8GB 256GB - Midnight</p>
                            <p>28.860.000 VNĐ</p>
                        </div>
                        <div className="category-item">
                            <img
                                src="https://product.hstatic.net/200000722513/product/k-air-m2-10gpu-8gb-512gb-space-gray-2_da160ffc11374dbab63ca3b77a0380cd_79a17cf3b73146899f6a1c06b1929e68_master.jpg"
                                alt="iPhone 13"
                            />
                            <h3>Macbook Air M2 </h3>
                            <p>Macbook Air M2 10GPU 8GB 512GB - Space Gray</p>
                            <p>32.480.000 VNĐ</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#">Xem tất cả IPad</a>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="card-header text-center">
                        <h2>Tin tức</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/7/16/photo-4-16895090422032082193713.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Xuất hiện hình ảnh iPhone 15 Pro màu hồng, đẹp lấn át cả màu đỏ
                                        rượu vang
                                    </h5>
                                    <p className="card-text">
                                        Apple không phải là hãng smartphone đi đầu trong việc thay đổi
                                        thiết kế của mình nhưng việc thay đổi màu sắc thì không hãng nào
                                        bằng Apple trong khoản tạo nên xu hướng!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/7/17/photo-1-16896022480271599794608.jpeg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Mẫu iPhone giảm kỷ lục 12 triệu đồng, tiếp tục "phá đáy" tại Việt
                                        Nam kể từ khi ra mắt
                                    </h5>
                                    <p className="card-text">
                                        Những đợt điều chỉnh giá liên tiếp tại các hệ thống bán lẻ lớn ở
                                        Việt Nam đã đưa giá mẫu iPhone này xuống dưới mức thấp nhất từng
                                        được ghi nhận.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/7/12/photo-1-1689156946434471493040.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Trên tay mẫu IPhone vừa sập giá còn chưa tới 5 triệu đồng: Vô vàn
                                        ưu điểm, nhưng cũng có một nhược điểm chí mạng
                                    </h5>
                                    <p className="card-text">
                                        Mặc dù có giá rẻ, nhưng mẫu iPhone này vẫn đủ sức đáp ứng tốt nhu
                                        cầu cơ bản của người dùng.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#">Xem thêm</a>
                    </div>
                </div>
        </>
    )
}
export default Home;