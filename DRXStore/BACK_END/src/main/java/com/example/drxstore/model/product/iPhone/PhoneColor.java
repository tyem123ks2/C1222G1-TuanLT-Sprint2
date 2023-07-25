package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class PhoneColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color;

    @OneToMany(mappedBy = "phoneColor")
    private Set<PhoneDetail> phoneDetailSet;

    public PhoneColor() {
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

    public Set<PhoneDetail> getPhoneDetailSet() {
        return phoneDetailSet;
    }

    public void setPhoneDetailSet(Set<PhoneDetail> phoneDetailSet) {
        this.phoneDetailSet = phoneDetailSet;
    }
}
