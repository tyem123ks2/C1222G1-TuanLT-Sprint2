import axios from "axios";

const findAll = async () => {
    try {
        const result = await axios.get(
            "http://localhost:8080/api/public/iphone"
        );
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const findIPhoneById = async (id) => {
    try {
        const result = await axios.get(
            `http://localhost:8080/api/public/iphone/detail/` + id
        );
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

const findAllIPhone = async (value, currentPage) => {
    return await axios.get(`http://localhost:8080/api/public/iphone?name=${value}&page=${currentPage}`);
}

const findAllIPhoneAd = async (value, currentPage, auth) => {
    const headers = { Authorization: "Bearer " + auth };
    const result = await axios.get(
        `http://localhost:8080/api/admin/iphone/?name=${value}&page=${currentPage}`,
        { headers }
    );
    return result;
}

export {
    findAll,
    findAllIPhone,
    findIPhoneById,
    findAllIPhoneAd
}

