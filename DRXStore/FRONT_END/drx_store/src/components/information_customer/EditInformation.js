// import * as Yup from "yup";
// import React, {useEffect, useState} from "react";
// import {useNavigate, useParams} from "react-router";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
// import "react-toastify/dist/ReactToastify.css";
// import {ToastContainer, toast} from "react-toastify";
// import {storage} from "../../firebase";
// import {findCustomerById, updateCustomer} from "../../service/CustomerService";
//
// const EditInformation = () => {
//     const [flag, setFlag] = useState(false);
//     const [customers, setCustomers] = useState(null);
//     const [img, setImg] = useState("");
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [progress, setProgress] = useState(0);
//     const [imgErr, setImgErr] = useState("");
//     const auth = localStorage.getItem("token");
//     const param = useParams();
//     const navigate = useNavigate();
//
//     const handleSelectFile = (event) => {
//         const file = event.target.files[0];
//         setFlag(true);
//         setImgErr("");
//         if (file) {
//             setSelectedFile(file);
//         }
//     };
//
//     const findCustomer = async () => {
//         const rs = findCustomerById(param.id, auth);
//         setCustomers(rs);
//     };
//
//     useEffect(() => {
//         findCustomer();
//     }, [param.id]);
//
//     const handleSubmitImg = async () => {
//         return new Promise((resolve, reject) => {
//             const file = selectedFile;
//             if (!file) {
//                 return reject("Chưa có file ảnh được chọn");
//             }
//             const storageRef = ref(storage, `files/${file.name}`);
//             const uploadTask = uploadBytesResumable(storageRef, file);
//             uploadTask.on(
//                 "state_changed",
//                 ((snapshot) => {
//                     const progress = Math.round(
//                         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                     );
//                     setProgress(progress);
//                 },
//                     (error) => {
//                         reject(error);
//                     },
//                     async () => {
//                         try {
//                             const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
//                             console.log(downloadUrl);
//                             setImg(downloadUrl);
//                             resolve(downloadUrl);
//                         } catch (e) {
//                             setImgErr(e.response.data[0].defaultMessage);
//                         }
//                     })
//             );
//         });
//     };
//
//     if (!customers) {
//         return null;
//     }
//
//
//     return (
//         <>
//             <Formik
//                 enableReinitialize={true}
//                 initialValues={{
//                     name: customer?.name,
//                     dateOfBirth: customer?.dateOfBirth,
//                     gender: customer?.gender,
//                     phoneNumber: customer?.phoneNumber,
//                     address: customers?.address,
//                     email: customers?.email,
//                     idCard: customers?.idCard,
//                     imgCustomer: customers?.imgCustomer,
//                 }}
//                 validationSchema={Yup.object({
//                     name: Yup.string()
//                         .trim()
//                         .required("Tên khuyến mãi không được để trống")
//                         .max(255, "Tên khuyến mãi không được quá 255 từ"),
//                     dateOfBirth: Yup.date()
//                         .required("Ngày bắt đầu không được để trống"),
//                     phoneNumber: Yup.string()
//                         .trim()
//                         .required("Chi tiết khuyến mãi không được để trống")
//                         .max(255, "Chi tiết khuyến mãi không được quá 255 từ"),
//                     address: Yup.string()
//                         .required("Phần trăm giảm giá không được để trống"),
//                     email: Yup.string()
//                         .required("Phần trăm giảm giá không được để trống"),
//                     idCard: Yup.string()
//                         .required("Phần trăm giảm giá không được để trống"),
//                     imgCustomer: Yup.string()
//                         .required("Phần trăm giảm giá không được để trống"),
//                 })}
//                 onSubmit={async (values, {setSubmitting}) => {
//                     const newValue = {
//                         ...values,
//                         imgCustomer: img,
//                     };
//                     try {
//                         if (flag) {
//                             newValue.imageDiscount = await handleSubmitImg();
//                             await updateCustomer(newValue, auth);
//                         } else {
//                             await updateCustomer(values, auth);
//                             console.log(values);
//                         }
//                         toast(`Chỉnh sửa thông tin khách hàng thành công! `);
//                         navigate(`/information`);
//                         setSubmitting(false);
//                     } catch (e) {
//                         setImgErr(e.response.data[0].defaultMessage);
//                     }
//                 }}
//             >
//                 <Form className="pt-5 mb-5">
//                     <div className="container">
//                         <div className="row mx-0">
//                             <div className="col-md-7 m-auto shadow border border-1 mt-5 px-0 col-12">
//                                 <div className="p-5">
//                                     <table className="w-100">
//                                         <thead>
//                                         <tr
//                                             style={{
//                                                 background: "#f26b38",
//                                                 paddingRight: 0,
//                                                 marginLeft: 0,
//                                             }}
//                                         >
//                                             <th
//                                                 className="title-font"
//                                                 style={{
//                                                     fontSize: 24,
//                                                     fontWeight: 600,
//                                                     color: "#fff",
//                                                     textAlign: "center",
//                                                 }}
//                                                 colSpan={2}
//                                             >
//                                                 Chỉnh sửa khuyến mãi
//                                             </th>
//                                         </tr>
//                                         </thead>
//                                         <tbody>
//                                         <tr className="">
//                                             <td className="" style={{alignItems: "end"}}>
//                                                 <label
//                                                     className="normal-font float-end"
//                                                     htmlFor="name"
//                                                     style={{marginRight: 15}}
//                                                 >
//                                                     Tên người dùng{" "}
//                                                     <span style={{color: "red", fontSize: 20}}>
//                               *
//                             </span>
//                                                 </label>
//                                             </td>
//                                             <td className="">
//                                                 <Field name="id" type="hidden"/>
//                                                 <Field
//                                                     name="name"
//                                                     className="form-control"
//                                                     id="name"
//                                                     placeholder=""
//                                                     type="text"
//                                                 />
//                                                 <ErrorMessage
//                                                     name="name"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                             </td>
//                                         </tr>
//                                         <tr className="">
//                                             <td className="">
//                                                 <label
//                                                     className="normal-font float-end"
//                                                     htmlFor="dateOfBirth"
//                                                     style={{marginRight: 15}}
//                                                 >
//                                                     Ngày sinh{" "}
//                                                     <span style={{color: "red"}}>*</span>
//                                                 </label>
//                                             </td>
//                                             <td className="">
//                                                 <Field
//                                                     name="dateOfBirth"
//                                                     className="form-control"
//                                                     id="dateOfBirth"
//                                                     type="date"
//                                                 />
//                                                 <ErrorMessage
//                                                     name="dateOfBirth"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                             </td>
//                                         </tr>
//                                         <tr className="">
//                                             <div className="col-md-6 mb-4">
//                                                 <div className="inputBox">
//                                                     <Field
//                                                         type="text"
//                                                         className="input"
//                                                         style={{width: "100%", height: "90%"}}
//                                                         name="phone"
//                                                     />
//                                                     <div>
//                                                         <ErrorMessage
//                                                             name="phone"
//                                                             component={"p"}
//                                                             style={{color: "red"}}
//                                                         />
//                                                     </div>
//                                                     <label
//                                                         className="labelInput"
//                                                         style={{
//                                                             marginLeft: "2%",
//                                                             marginTop: "-6%",
//                                                             backgroundColor: "white",
//                                                             color: "black",
//                                                         }}
//                                                     >
//                                                         Số điện thoại
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div
//                                                 className="col-md-6 mb-4"
//                                                 style={{display: "flex", marginLeft: "-12%"}}
//                                             >
//                                                 <Field
//                                                     type="radio"
//                                                     value="Nam"
//                                                     name="gender"
//                                                     style={{
//                                                         height: "35%",
//                                                         marginTop: "4%",
//                                                         marginRight: "-17%",
//                                                         marginLeft: "2%",
//                                                     }}
//                                                 />{" "}
//                                                 <span
//                                                     style={{marginTop: "1%", marginRight: "-10%"}}
//                                                 >
//                             Nam
//                           </span>
//                                                 <Field
//                                                     type="radio"
//                                                     value="N?"
//                                                     name="gender"
//                                                     style={{
//                                                         height: "35%",
//                                                         marginTop: "4%",
//                                                         marginRight: "-17%",
//                                                         marginLeft: "-10%",
//                                                     }}
//                                                 />{" "}
//                                                 <span style={{marginTop: "1%"}}>Nữ</span>
//                                                 <ErrorMessage
//                                                     name="gender"
//                                                     component={"p"}
//                                                     style={{color: "red"}}
//                                                 />
//                                             </div>
//                                         </tr>
//                                         <tr className="">
//                                             <td className="">
//                                                 <label
//                                                     className="normal-font float-end"
//                                                     htmlFor="imgCustomer"
//                                                     style={{marginRight: 15}}
//                                                 >
//                                                     Hình ảnh <span style={{color: "red"}}>*</span>
//                                                 </label>
//                                             </td>
//                                             <td className="">
//                                                 <Field
//                                                     type="file"
//                                                     onChange={(e) => handleSelectFile(e)}
//                                                     className="form-control-plaintext d-none "
//                                                     id="imgCustomer"
//                                                     name={"imgCustomer"}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="imgCustomer"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                                 <label
//                                                     htmlFor="imgCustomer"
//                                                     style={{
//                                                         padding: "6px 12px",
//                                                         marginTop: "12px",
//                                                         border: "1px solid",
//                                                         borderRadius: "4px",
//                                                     }}
//                                                 >
//                                                     Chọn hình ảnh
//                                                 </label>
//                                                 <br/>
//
//                                                 {!selectedFile && (
//                                                     <img
//                                                         className={"mt-2"}
//                                                         src={customers?.imgCustomer}
//                                                         style={{width: "50%"}}
//                                                     />
//                                                 )}
//                                                 {selectedFile && (
//                                                     <img
//                                                         className={"mt-2"}
//                                                         src={URL.createObjectURL(selectedFile)}
//                                                         style={{width: "50%"}}
//                                                     />
//                                                 )}
//                                                 <span className={"text-danger"}>{imgErr}</span>
//                                             </td>
//                                         </tr>
//                                         <tr className="">
//                                             <td className="align-top">
//                                                 <div className="float-end">
//                                                     <label
//                                                         className="normal-font align-top"
//                                                         htmlFor="address"
//                                                         style={{marginRight: 15, marginTop: 10}}
//                                                     >
//                                                         Địa chỉ <span style={{color: "red"}}>*</span>
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td className="">
//                                                 <Field
//                                                     style={{height: 130, marginTop: 10}}
//                                                     className="form-control"
//                                                     id="address"
//                                                     placeholder=""
//                                                     type="textarea"
//                                                     name={"address"}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="address"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                             </td>
//                                         </tr>
//                                         <tr className="">
//                                             <td className="align-top">
//                                                 <div className="float-end">
//                                                     <label
//                                                         className="normal-font align-top"
//                                                         htmlFor="email"
//                                                         style={{marginRight: 15, marginTop: 10}}
//                                                     >
//                                                        Email: <span style={{color: "red"}}>*</span>
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td className="">
//                                                 <Field
//                                                     style={{height: 130, marginTop: 10}}
//                                                     className="form-control"
//                                                     id="email"
//                                                     placeholder=""
//                                                     type="textarea"
//                                                     name={"email"}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="email"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                             </td>
//                                         </tr>
//                                         <tr className="">
//                                             <td className="align-top">
//                                                 <div className="float-end">
//                                                     <label
//                                                         className="normal-font align-top"
//                                                         htmlFor="idCard"
//                                                         style={{marginRight: 15, marginTop: 10}}
//                                                     >
//                                                         Email: <span style={{color: "red"}}>*</span>
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td className="">
//                                                 <Field
//                                                     style={{height: 130, marginTop: 10}}
//                                                     className="form-control"
//                                                     id="idCard"
//                                                     placeholder=""
//                                                     type="textarea"
//                                                     name={"idCard"}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="idCard"
//                                                     component="span"
//                                                     className="text-danger"
//                                                 />
//                                             </td>
//                                         </tr>
//                                         <tr style={{height: 120}}>
//                                             <td colSpan={2}>
//                                                 <button
//                                                     onClick={(event) => {
//                                                         navigate("/information");
//                                                     }}
//                                                     className="btn btn-secondary float-end"
//                                                     style={{
//                                                         width: "20%",
//                                                         background: "black",
//                                                         color: "white",
//                                                         marginLeft: "3%",
//                                                     }}
//                                                 >
//                                                     Quay lại
//                                                 </button>
//                                                 <button
//                                                     type="submit"
//                                                     className="btn btn-primary float-end"
//                                                     style={{background: "#f26b38"}}
//                                                 >
//                                                     Xác nhận
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Form>
//             </Formik>
//         </>
//     )
// }
//
// // export default EditInformation;