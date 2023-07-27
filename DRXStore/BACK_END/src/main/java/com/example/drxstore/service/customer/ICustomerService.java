package com.example.drxstore.service.customer;


import com.example.drxstore.dto.CustomerDTO;
import com.example.drxstore.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface ICustomerService {
    Customer findByAccount(String name);
    Boolean existByEmail(String email);
    void createCustomer(CustomerDTO customerDTO);
    Boolean existByPhone(String phone);
}
