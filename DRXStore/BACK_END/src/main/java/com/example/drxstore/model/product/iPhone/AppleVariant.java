package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;

@Entity
public class AppleVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;
    private Long price;

    private String imgIphone;

    @ManyToOne
    @JoinColumn(name = "apple_product_id")
    private AppleProduct appleProduct;

    @ManyToOne
    @JoinColumn(name = "apple_color_id")
    private AppleColor appleColor;

    @ManyToOne
    @JoinColumn(name = "apple_storage_id")
    private AppleStorage appleStorage;

    public AppleVariant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public AppleProduct getAppleProduct() {
        return appleProduct;
    }

    public void setAppleProduct(AppleProduct appleProduct) {
        this.appleProduct = appleProduct;
    }

    public AppleColor getAppleColor() {
        return appleColor;
    }

    public void setAppleColor(AppleColor appleColor) {
        this.appleColor = appleColor;
    }

    public AppleStorage getAppleStorage() {
        return appleStorage;
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

    public void setAppleStorage(AppleStorage appleStorage) {
        this.appleStorage = appleStorage;
    }
}
