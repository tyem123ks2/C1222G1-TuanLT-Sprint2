package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AppleColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color;

    @OneToMany(mappedBy = "appleColor")
    private Set<AppleVariant> appleVariantSet;

    public AppleColor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }


    public Set<AppleVariant> getAppleVariantSet() {
        return appleVariantSet;
    }

    public void setAppleVariantSet(Set<AppleVariant> appleVariantSet) {
        this.appleVariantSet = appleVariantSet;
    }
}
