import {useEffect, useState} from "react";
import {historyShopping} from "../../service/CartService";
import {findCustomer} from "../../service/CustomerService";
import {orderDetail} from "../../service/OrderDetailService";


const HistoryUser = () => {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState();
    const [orderDetails, setOrderDetails] = useState([])
    useEffect(() => {
        (async () => {
            const result = await historyShopping(token);
            setOrders(result);
            console.log(result);
        })()
    }, []);
    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    const getData = async (id) => {
        const data = await orderDetail(id, token);
        console.log(data)
        setOrderDetails(data);
    };
    return (
        <>
            <div className="container-fluid" style={{marginTop: 160}}>
                <h1 className="text-center">Lịch sử đặt hàng</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Mã đơn hàng</th>
                        <th>Ngày đặt hàng</th>
                        <th>Tổng tiền</th>
                        <th>Chi tiết</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>MH-{order.id}</td>
                            <td>{order.date}</td>
                            <td>{(+order.totalPayment).toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}</td>
                            <td>
                                <a onClick={() => getData(order.id)} type="button"
                                   className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">
                                    Chi tiết
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-center" style={{color: "red" , fontSize: 20 , fontWeight: "bolder"}}>
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết hoá đơn</h5>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                <th>Số thứ tự</th>
                                <th>Sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                </thead>
                                <tbody>
                                {orderDetails.map((orderDetail, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{orderDetail?.iPhoneDetail?.name}</td>
                                        <td><img src={orderDetail?.iPhoneDetail?.imgIphone} height="50px" width="50px" alt=""/></td>
                                        <td>{orderDetail?.quantityOrder}</td>
                                        <td>{(orderDetail?.order.totalPayment).toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HistoryUser;