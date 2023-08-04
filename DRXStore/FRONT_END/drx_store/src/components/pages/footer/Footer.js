import "./footer.css";
const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-2">
                            <h5>Đa dạng thanh toán</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                      Momo
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        PayPal
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        VNPay
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chuyển khoản ngân hàng
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Quét QRPay
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Thông tin hữu ích</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Tin tức
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Delivery &amp; Giới thiệu
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Giao hàng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Social networks</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Facebook
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Instagram
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        TikTok
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 offset-1">
                            <form>
                                <h5>Theo dõi DRX-Store để nhận được nhiều ưu đãi mới nhất từ cửa hàng!</h5>
                                <p>Địa chỉ Email của bạn:</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                        id="newsletter1"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập email tại đây..."
                                    />
                                    <button className="btn btn-primary" type="button">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p>
                            © 2023, Fanatics, Inc. and/or its affiliated entities. All Rights
                            Reserved. No portion of this site may be reproduced or duplicated
                            without the express permission of Fanatics.
                        </p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
};
export default Footer;
