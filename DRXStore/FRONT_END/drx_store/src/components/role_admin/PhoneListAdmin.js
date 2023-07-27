import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {findAllIPhone, findAllIPhoneAd} from "../../service/IPhoneService";
import Header from "../common/header/Header";
import NavLink from "react-bootstrap/NavLink";
import {Formik, Form, Field} from "formik";
import ReactPaginate from "react-paginate";
import ToastContainer from "react-bootstrap/ToastContainer";
import Footer from "../common/footer/Footer";

const PhoneListAdmin = () => {
    const [phoneList, setPhoneList] = useState([]);
    const [deleteId, setDeleteId] = useState(0);
    const [deleteName, setDeleteName] = useState("");
    const [deleteImage, setDeleteImage] = useState("");
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(0);
    let stt = page * size + 1;
    const [showMessage, setShowMessage] = useState(false);
    const [firstRecord, setFirstRecord] = useState(1);
    const [lastRecord, setLastRecord] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [records, setRecords] = useState([]);
    const [showPagination, setShowPagination] = useState(true);
    const auth = localStorage.getItem("token");
    const getPropsDeleteDiscount = (id, name, image) => {
        setDeleteId(id);
        setDeleteName(name);
        setDeleteImage(image);
    };

    function handleUpdate(id) {
        navigate(`/admin/iphone/update/${id}`);
    }

    const handlePageClick = (data) => {
        setPage(data.selected);
    };

    const findAll = async () => {
        const rs = await findAllIPhoneAd("", page, auth)
        console.log(rs);
        setPhoneList(rs.data.content); // Lấy tất cả các records trong danh sách
        setPageCount(rs.data.totalPages); // Tất cả số lượng trang sau khi phân trang
        setSize(rs.data.size);
        setTotalRecords(rs.data.totalElements);
    };

    useEffect(() => {
        findAll();
        const first = page * size + 1; //Hiển trị records đầu tiên trong mỗi Page
        const last = Math.min((page + 1) * size, totalRecords);
        //Hiển trị records cuối cùng trong mỗi Page, Sử dụng Math.min() để đảm bảo không vượt quá số bản ghi có sãn
        setFirstRecord(first);
        setLastRecord(last);
    }, [page, size, totalRecords]);



    useEffect(() => {
        // Kiểm tra xem có token đăng nhập trong localStorage không
        const token = localStorage.getItem("token");
        try {
            
        } catch (e) {
            
        }
        
        if (!token) {
            return navigate("/error401");
        }
    }, []);


    return (
        phoneList && (
            <>
                <div className="row mx-0" style={{margin: "20px 0"}}>
                    <div
                        className="container-fluid mx-auto my-5 col-10"
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.2) 1px 3px 10px 5px",
                            padding: 0,
                        }}
                    >
                        <div>
                            <div style={{marginBottom: 20}}>
                                <h2
                                    className="d-flex justify-content-center"
                                    style={{
                                        padding: 16,
                                        backgroundColor: "#f26b38",
                                        color: "#fff",
                                        fontSize: 24,
                                        fontWeight: 600,
                                    }}
                                >
                                    DANH SÁCH IPHONE
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <NavLink to="/admin/discount/create">
                                        <button
                                            className="btn btn-outline-primary text-dark"
                                            style={{
                                                background: "rgb(242, 107, 56)",
                                                border: "none",
                                                marginLeft: "10px",
                                            }}
                                        >
                                            <i
                                                className="bi bi-plus-circle"
                                                style={{color: "white"}}
                                            />{" "}
                                            <span style={{color: "white"}}>
                        Thêm mới sản phẩm
                      </span>
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="row col-md-8">
                                    <Formik
                                        initialValues={{
                                            name: "",
                                        }}
                                        onSubmit={(value) => {
                                            const search = async () => {
                                                const rs = await findAllIPhone(value.name, 0, auth);
                                                if (rs.data.content.length === 0) {
                                                    setShowMessage(true);
                                                } else {
                                                    setShowMessage(false);
                                                    setPhoneList(rs.data.content);
                                                    setPageCount(rs.data.totalPages);
                                                }
                                                setRecords([...records]);
                                            };
                                            search();
                                        }}
                                    >
                                        <Form className="d-flex justify-content-end">
                                            <div
                                                className="form-group d-flex justify-content-end w-75"
                                                style={{
                                                    paddingLeft: 80,
                                                }}
                                            >
                                                <i className="ti-search ti-search1"/>
                                                <Field
                                                    type="text"
                                                    className="form-control float-start me-3"
                                                    style={{
                                                        width: "90%",
                                                        paddingLeft: 35,
                                                        height: "38px",
                                                    }}
                                                    name="name"
                                                    aria-describedby="helpId"
                                                    placeholder="Tìm kiếm..."
                                                />
                                                <button
                                                    className="btn btn-outline-success"
                                                    style={{
                                                        background: "rgb(242, 107, 56)",
                                                        color: "white",
                                                        border: "none",
                                                        width: "50px",
                                                    }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-search"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                            <div style={{marginTop: 20}}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div>
                                            {showMessage && (
                                                <div className="d-flex justify-content-center">
                                                    <span id="empty">Không tìm thấy tên iPhone</span>
                                                    <div>
                                                        <button
                                                            className="btn btn-outline-primary ms-3"
                                                            onClick={() => setShowMessage(false)}
                                                        >
                                                            Trở về danh sách iPhone
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {!showMessage && phoneList.length > 0 && (
                                                <table className="table table-striped table-hover">
                                                    <thead>
                                                    <tr style={{textAlign: "center"}}>
                                                        <th
                                                            style={{width: "2%"}}
                                                            className="text-center"
                                                        >
                                                            STT
                                                        </th>
                                                        <th
                                                            style={{width: "15%"}}
                                                            className="text-center"
                                                        >
                                                            Tên sản phẩm
                                                        </th>
                                                        <th
                                                            style={{width: "10%"}}
                                                            className="text-center"
                                                        >
                                                            Hình ảnh
                                                        </th>
                                                        <th
                                                            style={{width: "10%"}}
                                                            className="text-center"
                                                        >
                                                            Số lượng
                                                        </th>
                                                        <th
                                                            style={{width: "10%"}}
                                                            className="text-center"
                                                        >
                                                            Giá sản phẩm (VND)
                                                        </th>
                                                        <th
                                                            style={{width: "25%"}}
                                                            className="text-center"
                                                        >
                                                            Giá khuyến mãi (VND)
                                                        </th>
                                                        <th className="text-center">Mô tả</th>
                                                        <th className="text-center">Tác vụ</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {phoneList.map((phone, index) => {
                                                        return (
                                                            <tr key={index} style={{textAlign: "center"}}>
                                                                <td
                                                                    scope="row"
                                                                    className="text-center align-middle "
                                                                >
                                                                    {" "}
                                                                    <strong>{stt++}</strong>
                                                                </td>
                                                                <td
                                                                    style={{width: "15%"}}
                                                                    className="align-middle text-start"
                                                                >
                                                                    {phone.name}
                                                                </td>
                                                                <td className="text-center align-middle">
                                                                    <div className="d-flex justify-content-center">
                                                                        <a
                                                                            href={phone.imgIphone}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <img
                                                                                src={phone.imgIphone}
                                                                                alt="Hình ảnh iPhone"
                                                                                style={{width: 125, height: 125}}
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center align-middle">
                                                                    {phone.quantity}
                                                                </td>
                                                                <td className="text-center align-middle">
                                                                    {phone.price}
                                                                </td>
                                                                <td className="align-middle text-start">
                                                                    {phone.sellPrice}
                                                                </td>
                                                                <td className="text-center align-middle">
                                                                    <strong>{phone.description}</strong>
                                                                </td>
                                                                <td className="text-center align-middle">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-outline-warning"
                                                                        onClick={() =>
                                                                            handleUpdate(phone.id)
                                                                        }
                                                                    >
                                                                        <i className="bi bi-pencil"/>
                                                                    </button>
                                                                    <button
                                                                        style={{marginLeft: "5px"}}
                                                                        type="button"
                                                                        data-bs-toggle="modal"
                                                                        className="btn btn-outline-danger"
                                                                        data-bs-target="#exampleModal"
                                                                        onClick={() =>
                                                                            getPropsDeleteDiscount(phone.id, phone.name, phone.imgIphone
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="bi bi-trash"/>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="d-flex justify-content-center">
                                        <p>
                                            Hiển thị{" "}
                                            <strong>
                                                {firstRecord} - {lastRecord}{" "}
                                            </strong>{" "}
                                            trong tổng số <strong>{totalRecords}</strong> bản ghi
                                        </p>
                                    </div>
                                    <ReactPaginate
                                        previousLabel={"Trước"}
                                        nextLabel={"Sau"}
                                        pageCount={pageCount}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination"
                                        pageClassName="page-item"
                                        pageLinkClassName="page-link"
                                        previousClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextClassName="page-item"
                                        nextLinkClassName="page-link"
                                        activeClassName="active"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

                {/*<DiscountModalDelete*/}
                {/*    id={deleteId}*/}
                {/*    name={deleteName}*/}
                {/*    image={deleteImage}*/}
                {/*    getShowList={() => {*/}
                {/*        findAll();*/}
                {/*    }}*/}
                {/*/>*/}
            </>
        )
    );
}

export default PhoneListAdmin;