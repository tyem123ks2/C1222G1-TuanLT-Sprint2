package com.example.drxstore.service.product.iphone;

import com.example.drxstore.model.product.iPhone.PhoneColor;
import com.example.drxstore.model.product.iPhone.PhoneDetail;
import com.example.drxstore.model.product.iPhone.PhoneProduct;
import com.example.drxstore.model.product.iPhone.PhoneStorage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPhoneDetailService {
    Page<PhoneDetail> findIPhone(String name, Pageable pageable);
    PhoneDetail findById(int id);
    void save(PhoneDetail phoneDetail);
    void createPhone(String name, int quantity, Long price, Long sellPrice, String imgIphone, String description);
}
