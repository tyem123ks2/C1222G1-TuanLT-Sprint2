package com.example.drxstore.dto;

import com.example.drxstore.model.AccountUser;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class CustomerDTO {
    private Integer idCustomer;
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^(?=.*[a-zA-Z\\s])[^!@#$%^&*(),.?\":{}|<>]{4,100}$", message = "Tên không h?p l?")
    @Size(min = 4, max = 99, message = "Tên ph?i có ?? dài t? 4 ??n 99 ký t?")
    private String name;
    private LocalDate dateOfBirth;
    private String gender;
    @Pattern(regexp = "^(\\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$",
            message = "Số điện thoại không hợp lệ")
    private String phoneNumber;
    @Size(min = 3, max = 200, message = "Địa chỉ phải từ 3 ký tự và không dài quá 200 ký tự")
    private String address;
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "Email không hợp lệ")
    private String email;
    @Pattern(regexp = "^[0-9]{12}$", message = "CCCD không hợp lệ, phải là 12 chữ số")
    private String idCard;
    @NotBlank(message = "Không được để trống")
    private String imgCustomer;
    private AccountUser accountUser;

    public CustomerDTO() {
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhone(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getImgCustomer() {
        return imgCustomer;
    }

    public void setImgCustomer(String imgCustomer) {
        this.imgCustomer = imgCustomer;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }
}

