package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AppleProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;

    @OneToMany(mappedBy = "appleProduct", cascade = CascadeType.ALL)
    private Set<AppleVariant> appleVariantSet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Set<AppleVariant> getAppleVariantSet() {
        return appleVariantSet;
    }

    public void setAppleVariantSet(Set<AppleVariant> appleVariantSet) {
        this.appleVariantSet = appleVariantSet;
    }


}
