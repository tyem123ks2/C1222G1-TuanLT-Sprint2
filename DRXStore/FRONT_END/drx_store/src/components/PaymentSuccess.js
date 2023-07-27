import {useEffect, useState} from "react";
import * as CustomerService from "../service/CustomerService";
import {useParams} from "react-router";

const PaymentSuccess = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState();
    const currentDate = new Date();
    const param = useParams();
    useEffect(() => {
        {
            username ? (async () => {
                const result = await CustomerService.findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    return (
        <>
            <div className="container-fluid" style={{textAlign: "center", marginTop: 20}}>
                <h1 style={{color: "green"}}>Thanh toán thành công</h1>
                <div style={{
                    marginLeft: 510
                }}>
                    <table className="table-striped table" style={{width: 500}}>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Tên khách hàng</th>
                            <td>{customer?.name}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{customer?.address}</td>
                        </tr>
                        <tr>
                            <th>Ngày đặt hàng</th>
                            <td>{currentDate.toISOString()}</td>
                        </tr>
                        <tr>
                            <th>Tổng tiền</th>
                            <td>{(+param.totalPrice).toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PaymentSuccess;