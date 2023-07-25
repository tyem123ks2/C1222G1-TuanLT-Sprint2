package com.example.drxstore.dto;

public class UpdateCartDTO {
    private Integer quantity;
    private Integer iPhoneDetail;

    public UpdateCartDTO() {
    }

    public UpdateCartDTO(Integer iPhoneDetail) {
        this.iPhoneDetail = iPhoneDetail;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getiPhoneDetail() {
        return iPhoneDetail;
    }

    public void setiPhoneDetail(Integer iPhoneDetail) {
        this.iPhoneDetail = iPhoneDetail;
    }
}
