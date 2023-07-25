package com.example.drxstore.dto;

public class CartCreateDTO {
    private Integer quantity;
    private boolean status = true;
    private Integer phoneDetail;

    public CartCreateDTO() {
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getPhoneDetail() {
        return phoneDetail;
    }

    public void setPhoneDetail(Integer phoneDetail) {
        this.phoneDetail = phoneDetail;
    }
}
