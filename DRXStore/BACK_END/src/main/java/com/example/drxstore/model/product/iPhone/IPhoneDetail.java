package com.example.drxstore.model.product.iPhone;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class IPhoneDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int quantity;
    private Long price;
    private String imgIphone;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "iphone_product_id")
    private IPhoneProduct appleProduct;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "iphone_color_id")
    private IPhoneColor iPhoneColor;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "iphone_storage_id")
    private IPhoneStorage iPhoneStorage;

    public IPhoneDetail() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public IPhoneProduct getAppleProduct() {
        return appleProduct;
    }

    public void setAppleProduct(IPhoneProduct appleProduct) {
        this.appleProduct = appleProduct;
    }

    public IPhoneColor getiPhoneColor() {
        return iPhoneColor;
    }

    public void setiPhoneColor(IPhoneColor iPhoneColor) {
        this.iPhoneColor = iPhoneColor;
    }

    public Long getPrice() {
        return price;
    }

    public String getImgIphone() {
        return imgIphone;
    }

    public void setImgIphone(String imgIphone) {
        this.imgIphone = imgIphone;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public IPhoneStorage getiPhoneStorage() {
        return iPhoneStorage;
    }

    public void setiPhoneStorage(IPhoneStorage iPhoneStorage) {
        this.iPhoneStorage = iPhoneStorage;
    }
}
