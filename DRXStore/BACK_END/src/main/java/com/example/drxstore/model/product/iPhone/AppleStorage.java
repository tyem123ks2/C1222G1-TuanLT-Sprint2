package com.example.drxstore.model.product.iPhone;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AppleStorage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int storage;

    @OneToMany(mappedBy = "appleStorage")
    private Set<AppleVariant> appleVariantSet;

    public AppleStorage() {
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

    public Set<AppleVariant> getAppleVariantSet() {
        return appleVariantSet;
    }

    public void setAppleVariantSet(Set<AppleVariant> appleVariantSet) {
        this.appleVariantSet = appleVariantSet;
    }
}
