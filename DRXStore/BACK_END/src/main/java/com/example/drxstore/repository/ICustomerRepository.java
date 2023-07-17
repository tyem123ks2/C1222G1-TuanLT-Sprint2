package com.example.drxstore.repository;

import com.example.drxstore.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);
}
