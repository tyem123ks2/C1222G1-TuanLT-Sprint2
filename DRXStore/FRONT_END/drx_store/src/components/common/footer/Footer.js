import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h5>Đa dạng thanh toán</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chuyển khoản
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Tiền mặt
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        VNPAY
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Thẻ ATM
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Thông tin hữu ích</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Về chúng tôi
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chính sách bảo hành
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chính sách đổi trả
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chính sách vận chuyển
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chính sách bảo mật
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Chính sách thanh toán
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
                                        Youtube
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Tiktok
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Ấn đăng kí và theo dõi để nhận nhiều ưu đãi tại DRXStore</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                        id="newsletter1"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập email tại đây"
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
                            © DRXStore 2023 - Địa chỉ: 45 Trần Cao Vân, Phường Láng Hạ, Quận Đống
                            Đa, Hà Nội. Điện thoại: 1900633579
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
    )
}

export default Footer;