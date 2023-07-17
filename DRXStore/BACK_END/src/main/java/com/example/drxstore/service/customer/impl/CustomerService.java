package com.example.drxstore.service.customer.impl;
import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.repository.ICustomerRepository;
import com.example.drxstore.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }
}
