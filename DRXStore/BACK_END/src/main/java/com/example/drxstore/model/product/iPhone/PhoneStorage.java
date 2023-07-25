package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class PhoneStorage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int storage;

    @OneToMany(mappedBy = "phoneStorage")
    private Set<PhoneDetail> PhoneDetailSet;

    public PhoneStorage() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    public Set<PhoneDetail> getIPhoneDetailSet() {
        return PhoneDetailSet;
    }

    public void setIPhoneDetailSet(Set<PhoneDetail> PhoneDetailSet) {
        this.PhoneDetailSet = PhoneDetailSet;
    }
}
