package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class IPhoneColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color;

    @OneToMany(mappedBy = "iPhoneColor")
    private Set<IPhoneDetail> IPhoneDetailSet;

    public IPhoneColor() {
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


    public Set<IPhoneDetail> getAppleVariantSet() {
        return IPhoneDetailSet;
    }

    public void setAppleVariantSet(Set<IPhoneDetail> IPhoneDetailSet) {
        this.IPhoneDetailSet = IPhoneDetailSet;
    }
}
