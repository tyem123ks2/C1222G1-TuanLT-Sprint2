import axios from "axios";
import * as Swal from "sweetalert2";

const addCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/user/cart/add`, {...cart}, {headers})
        Swal.fire({
            title: 'Thông báo',
            text: 'Thêm thành công sản phẩm vào giỏ hàng!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}

const findCartByCustomerId = async (auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        const result = await axios.get(`http://localhost:8080/api/user/cart`, {headers});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
const updateCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.put(`http://localhost:8080/api/user/cart/update`, {...cart}, {headers});
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Số lượng sản phẩm đạt giới hạn!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}
const deleteCart1 = async (id, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.delete(`http://localhost:8080/api/user/cart/delete/` + id, {headers});
    } catch (e) {
        console.log(e);
    }
}
const payment = async (totalPrice, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/user/order/payment`, {...totalPrice}, {headers});
    } catch (e) {
        console.log(e);
    }
}
const historyShopping = async (auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        return (await axios.get(`http://localhost:8080/api/user/order/history`, {headers})).data;
    } catch (e) {
        console.log(e);
    }
}

export {
    addCart,
    findCartByCustomerId,
    updateCart,
    deleteCart1,
    payment,
    historyShopping
}