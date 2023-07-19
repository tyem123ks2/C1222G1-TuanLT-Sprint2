import axios from "axios";
/**
 * @author
 * @param {*} value
 * @since 28/05/2023
 * @returns giá trị của đối tượng bao gồm các thông tin: token, username, roles
 * hàm được dùng để đăng nhập với giá trị đầu vào là username và password
 */
export const handleCallApiLogin = async (value) => {
    try {
        const result = await axios.post(
            "http://localhost:8080/api/public/signin", value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};


/**
 * @author TuanLT
 * @param {*} value
 * @since 28/05/2023
 * @returns giá trị của đối tượng bao gồm các thông tin: message đã tạo thành công hay chưa
 * hàm được sử dụng để tạo tài khoản thông qua các thông tin từ tài khoản của facebook
 */
export const handleCallApiToCreateAccountFb = async (value) => {
    try {
        const result = await axios.post(
            "http://localhost:8080/api/public/login-facebook",
            value
        );
        return result;
    } catch (e) {
        return { error: e };
    }
};
