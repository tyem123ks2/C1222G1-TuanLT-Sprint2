package com.example.drxstore.model.product.iPhone;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class PhoneDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int quantity;
    private Long price;
    private Long sellPrice;
    private String imgIphone;
    private String description;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "phone_product_id")
    private PhoneProduct phoneProduct;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "phone_color_id")
    private PhoneColor phoneColor;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "phone_storage_id")
    private PhoneStorage phoneStorage;

    public PhoneDetail() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getImgIphone() {
        return imgIphone;
    }

    public void setImgIphone(String imgIphone) {
        this.imgIphone = imgIphone;
    }

    public PhoneProduct getPhoneProduct() {
        return phoneProduct;
    }

    public void setPhoneProduct(PhoneProduct phoneProduct) {
        this.phoneProduct = phoneProduct;
    }

    public PhoneColor getPhoneColor() {
        return phoneColor;
    }

    public void setPhoneColor(PhoneColor phoneColor) {
        this.phoneColor = phoneColor;
    }

    public PhoneStorage getPhoneStorage() {
        return phoneStorage;
    }

    public void setPhoneStorage(PhoneStorage phoneStorage) {
        this.phoneStorage = phoneStorage;
    }

    public Long getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(Long sellPrice) {
        this.sellPrice = sellPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
