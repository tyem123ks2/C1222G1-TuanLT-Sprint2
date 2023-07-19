package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class IPhoneStorage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int storage;

    @OneToMany(mappedBy = "iPhoneStorage")
    private Set<IPhoneDetail> IPhoneDetailSet;

    public IPhoneStorage() {
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

    public Set<IPhoneDetail> getAppleVariantSet() {
        return IPhoneDetailSet;
    }

    public void setAppleVariantSet(Set<IPhoneDetail> IPhoneDetailSet) {
        this.IPhoneDetailSet = IPhoneDetailSet;
    }
}
