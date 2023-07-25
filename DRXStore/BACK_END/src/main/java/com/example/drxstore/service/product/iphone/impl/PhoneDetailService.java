package com.example.drxstore.service.product.iphone.impl;

import com.example.drxstore.model.product.iPhone.PhoneDetail;
import com.example.drxstore.repository.IPhoneDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.drxstore.service.product.iphone.IPhoneDetailService;
@Service
public class PhoneDetailService implements IPhoneDetailService {
    @Autowired
    private IPhoneDetailRepository phoneDetailRepository;

    @Override
    public Page<PhoneDetail> findIPhone(String name, Pageable pageable) {
        return phoneDetailRepository.findAllIPhone(name, pageable);
    }

    @Override
    public PhoneDetail findById(int id) {
        return phoneDetailRepository.findById(id).get();
    }

    @Override
    public void save(PhoneDetail phoneDetail) {
        phoneDetailRepository.save(phoneDetail);
    }
}
