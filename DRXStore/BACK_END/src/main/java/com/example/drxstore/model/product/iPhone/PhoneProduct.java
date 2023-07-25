package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class PhoneProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;

    @OneToMany(mappedBy = "phoneProduct", cascade = CascadeType.ALL)
    private Set<PhoneDetail> PhoneDetailSet;

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

    public Set<PhoneDetail> getPhoneDetailSet() {
        return PhoneDetailSet;
    }

    public void setPhoneDetailSet(Set<PhoneDetail> phoneDetailSet) {
        PhoneDetailSet = phoneDetailSet;
    }
}
