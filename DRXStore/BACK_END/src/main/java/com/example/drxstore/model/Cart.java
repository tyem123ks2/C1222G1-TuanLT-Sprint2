package com.example.drxstore.model;

import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.model.product.iPhone.PhoneDetail;

import javax.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCart;
    private Integer quantity;
    private boolean status = true;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_customer")
    private Customer customer;
    @ManyToOne
    @JoinColumn(columnDefinition = "phone_detail_id")
    private PhoneDetail phoneDetail;

    public Cart() {
    }

    public Integer getIdCart() {
        return idCart;
    }

    public void setIdCart(Integer idCart) {
        this.idCart = idCart;
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public PhoneDetail getiPhoneDetail() {
        return phoneDetail;
    }

    public void setiPhoneDetail(PhoneDetail phoneDetail) {
        this.phoneDetail = phoneDetail;
    }
}
