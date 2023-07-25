import Swal from "sweetalert2";
import {useNavigate} from "react-router";
import {useContext, useEffect, useState} from "react";
import {ValueIconCartContext} from "./ValueIconCartContext";
import {findCartByCustomerId, payment, updateCart} from "../service/CartService";


const Cart = () => {
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState();
    const {setIconQuantity} = useContext(ValueIconCartContext)
    const [cart] = useState({
        quantity: 1,
        figureProduct: ""
    })
    const findAllCart = async () => {
        try {
            const result = await findCartByCustomerId(token);
            setCarts(result);
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        } catch (e) {
            console.log(e)
        }
    }
    const deleteCart = async (id) => {
        try {
            await deleteCart(id, token);
            Swal.fire({
                title: 'Thông báo',
                text: 'Xoá sản phẩm thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            findAllCart();
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        {
            username ? findAllCart() : setIconQuantity(0)
        }
    }, []);
    useEffect(() => {
        {
            username ? (async () => {
                const result = await CustomerService.findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    const totalPrice = carts.reduce((total, cart) => {
        return total + cart?.figureProduct?.price * cart?.quantity;
    }, 0);
    const decreaseQuantity = async (cartIndex) => {
        const updatedCarts = [...carts];
        if (updatedCarts[cartIndex].quantity > 1) {
            updatedCarts[cartIndex].quantity -= 1;
            setCarts(updatedCarts);
            try {
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    figureProduct: updatedCarts[cartIndex].figureProduct?.id
                }, token);
                findAllCart();
            } catch (e) {
                console.log(e);
            }
        }
    };
    const increaseQuantity = async (cartIndex) => {
        const updatedCarts = [...carts];
        updatedCarts[cartIndex].quantity += 1;
        setCarts(updatedCarts);
        await updateCart({
            ...cart,
            quantity: updatedCarts[cartIndex].quantity,
            figureProduct: updatedCarts[cartIndex].figureProduct?.id
        }, token);
        findAllCart();
    };
    const handlePayment = async (totalPrice) => {
        try {
            await payment({totalPrice}, token);
            navigate(`/order-detail/${totalPrice}`)
        } catch (e) {
            console.log(e);
        }
    }
    const handleInputChange = async (event, cartIndex) => {
        const newQuantity = parseInt(event.target.value);
        try {
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                const updatedCarts = [...carts];
                updatedCarts[cartIndex].quantity = newQuantity;
                setCarts(updatedCarts);
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    figureProduct: updatedCarts[cartIndex].figureProduct?.id
                }, token);
                findAllCart();
            }
        } catch (e) {
            console.log(e);
        }
    };
    const handleOnclickPayment = async (totalPrice) => {
        const payment = {
            totalPrice: totalPrice
        }
        try {
            const result = await PaymentService.payment(payment, token);
            localStorage.setItem("totalPrice" , totalPrice)
            window.location.href = result.url;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <div className="container cart-margin">
                <div className=" ">
                    <div className="row" style={{display: "flex"}}>
                        <div className="col-md-8">
                            <div className="title-cart">
                                <div className="row">
                                    <div className="col">
                                        <h4>
                                            <b>Giỏ hàng</b>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            {carts.length === 0 ? (
                                <div className="row border-top border-bottom">
                                    <div className="row main">
                                        <img
                                            src="https://bizweb.dktcdn.net/100/320/202/themes/714916/assets/empty-cart.png?1650292912948"
                                            alt=""/>
                                    </div>
                                </div>
                            ) : (
                                <div className="row border-top border-bottom">
                                    {carts.map((cart, index) => (
                                        <div className="row main align-items-center" key={index}>
                                            <div className="col-2">
                                                <img className="img-cart-hihi img-fluid"
                                                     src={cart?.figureProduct?.imgFigure}/>
                                            </div>
                                            <div className="col">
                                                <div className="row text-muted">{cart?.figureProduct?.name}</div>
                                            </div>
                                            <div className="col">
                                                <a className="a-cart"
                                                   onClick={() => decreaseQuantity(index)}>-</a>
                                                <input type="text" onChange={(event) => handleInputChange(event, index)}
                                                       className="input-c" value={cart.quantity}/>
                                                <a className="a-cart" onClick={() => increaseQuantity(index)}>+</a>
                                            </div>
                                            <div className="col">
                                                {(cart.quantity * cart?.figureProduct?.price).toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </div>
                                            <div className="col">
                                                <a onClick={() => deleteCart(cart?.idCart)}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-trash3"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="back-to-shop">
                                <Link to="/home" className="a-cart">←</Link>
                                <span className="text-muted">Trang chủ</span>
                            </div>
                        </div>
                        <div className="col-md-4 summary">
                            <div>
                                <h5 className="h5-cart">
                                    <b>Đơn hàng</b>
                                </h5>
                            </div>
                            <hr className="hr-cart"/>
                            <form className="form-cart">
                                <div className="col" style={{paddingLeft: 0}}>
                                    Giao đến : {customer?.address}
                                </div>
                            </form>
                            <div
                                className="row"
                                style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}
                            >
                                <div className="col item">Tổng tiền : {totalPrice.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}</div>
                            </div>
                            <PayPalScriptProvider
                                options={{"client-id": 'AXU13CYPCv4Cm99RH4gVvsOJri1VgivtuCwLlZMNQAogPWUmMYe6nip5UzSDRiRsK_jIhs7Q-V3JAZB8'}}
                            >
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: parseFloat((totalPrice / 24000).toString().slice(0, 4)),
                                                        currency_code: 'USD'
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        handlePayment(totalPrice)
                                    }}
                                />
                            </PayPalScriptProvider>
                            <div>
                                <button type="button" className="btn btn-primary btn-sm" onClick={() => handleOnclickPayment(totalPrice)}>Thanh toán qua VNPay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;