package com.example.drxstore.service.product.iphone;

import com.example.drxstore.model.product.iPhone.IPhoneDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IIPhoneDetailService {
    Page<IPhoneDetail> findIPhone(String name, Pageable pageable);
    IPhoneDetail findById(int id);
    void save(IPhoneDetail iPhoneDetail);
}
