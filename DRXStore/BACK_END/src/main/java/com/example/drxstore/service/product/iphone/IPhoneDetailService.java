package com.example.drxstore.service.product.iphone;

import com.example.drxstore.model.product.iPhone.IPhoneDetail;
import com.example.drxstore.repository.IIPhoneDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class IPhoneDetailService implements IIPhoneDetailService {
    @Autowired
    private IIPhoneDetailRepository iPhoneDetailRepository;

    @Override
    public Page<IPhoneDetail> findIPhone(String name, Pageable pageable) {
        return iPhoneDetailRepository.findAllIPhone(name, pageable);
    }

    @Override
    public IPhoneDetail findById(int id) {
        return iPhoneDetailRepository.findById(id).get();
    }

    @Override
    public void save(IPhoneDetail iPhoneDetail) {
        iPhoneDetailRepository.save(iPhoneDetail);
    }
}
