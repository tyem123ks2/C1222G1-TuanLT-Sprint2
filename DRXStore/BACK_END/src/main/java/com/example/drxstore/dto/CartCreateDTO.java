package com.example.drxstore.dto;

public class CartCreateDTO {
    private Integer quantity;
    private boolean status = true;
    private Integer IPhoneDetail;

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

    public Integer getIPhoneDetail() {
        return IPhoneDetail;
    }

    public void setIPhoneDetail(Integer IPhoneDetail) {
        this.IPhoneDetail = IPhoneDetail;
    }
}
