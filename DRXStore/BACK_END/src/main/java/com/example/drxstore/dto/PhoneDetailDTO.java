package com.example.drxstore.dto;

import com.example.drxstore.model.product.iPhone.PhoneColor;
import com.example.drxstore.model.product.iPhone.PhoneProduct;
import com.example.drxstore.model.product.iPhone.PhoneStorage;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class PhoneDetailDTO implements Validator {
    private int id;
    private String name;
    private int quantity;
    private Long price;
    private Long sellPrice;
    private String imgIphone;
    private String description;
    private PhoneProduct phoneProduct;
    private PhoneColor phoneColor;
    private PhoneStorage phoneStorage;

    public PhoneDetailDTO() {
    }

    public PhoneDetailDTO(int id, String name, int quantity, Long price, Long sellPrice, String imgIphone, String description, PhoneProduct phoneProduct, PhoneColor phoneColor, PhoneStorage phoneStorage) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.sellPrice = sellPrice;
        this.imgIphone = imgIphone;
        this.description = description;
        this.phoneProduct = phoneProduct;
        this.phoneColor = phoneColor;
        this.phoneStorage = phoneStorage;
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

    public Long getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(Long sellPrice) {
        this.sellPrice = sellPrice;
    }

    public String getImgIphone() {
        return imgIphone;
    }

    public void setImgIphone(String imgIphone) {
        this.imgIphone = imgIphone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
