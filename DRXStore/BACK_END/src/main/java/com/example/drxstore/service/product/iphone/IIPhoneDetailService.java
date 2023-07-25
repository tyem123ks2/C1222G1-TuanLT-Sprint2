package com.example.drxstore.service.product.iphone;

import com.example.drxstore.model.product.iPhone.PhoneDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IIPhoneDetailService {
    Page<PhoneDetail> findIPhone(String name, Pageable pageable);
    PhoneDetail findById(int id);
    void save(PhoneDetail phoneDetail);
}
