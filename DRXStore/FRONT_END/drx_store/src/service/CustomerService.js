import axios from "axios";

const findCustomer = async (auth) => {
    const headers = { Authorization: "Bearer " + auth}
    try {
        const result = await axios.get(`http://localhost:8080/api/user/customer` , {headers});
        return result.data;
    }catch (e){
        console.log(e);
    }
}

const saveCustomer = async (customer) => {
    try {
        await axios.post(`http://localhost:8080/api/public/customer/create`, {
            ...customer,
        });
    } catch (e) {
        console.log(e);
    }
};

const checkUsernameExists = async (nameAccount) => {
    try {
        return (
            await axios.get(
                `http://localhost:8080/api/public/check-account/${nameAccount}`
            )
        ).data;
    } catch (error) {
        console.error(error);
        // X? lý l?i n?u c?n thi?t
        throw new Error("?ã x?y ra l?i khi ki?m tra tài kho?n");
    }
};

const checkPhoneExists = async (phone) => {
    try {
        return (
            await axios.get(`http://localhost:8080/api/public/check-phone/${phone}`)
        ).data;
    } catch (error) {
        console.error(error);
        // X? lý l?i n?u c?n thi?t
        throw new Error("?ã x?y ra l?i khi ki?m tra s? ?iên tho?i");
    }
};

const checkEmailExists = async (email) => {
    try {
        return (
            await axios.get(`http://localhost:8080/api/public/check-email/${email}`)
        ).data;
    } catch (error) {
        console.error(error);
        // X? lý l?i n?u c?n thi?t
        throw new Error("?ã x?y ra l?i khi ki?m tra email");
    }
};

export {
    findCustomer,
    saveCustomer,
    checkUsernameExists,
    checkPhoneExists,
    checkEmailExists
}