package com.example.drxstore.dto;

public class RequestPayment {
    private Double totalPrice;

    public RequestPayment() {
    }

    public RequestPayment(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
