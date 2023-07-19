package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class IPhoneProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;

    @OneToMany(mappedBy = "appleProduct", cascade = CascadeType.ALL)
    private Set<IPhoneDetail> IPhoneDetailSet;

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

    public Set<IPhoneDetail> getAppleVariantSet() {
        return IPhoneDetailSet;
    }

    public void setAppleVariantSet(Set<IPhoneDetail> IPhoneDetailSet) {
        this.IPhoneDetailSet = IPhoneDetailSet;
    }


}
