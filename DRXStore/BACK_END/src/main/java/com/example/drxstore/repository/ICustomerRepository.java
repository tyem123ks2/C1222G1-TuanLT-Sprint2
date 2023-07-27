package com.example.drxstore.repository;

import com.example.drxstore.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);
    Customer findCustomersByPhoneNumber(String phone);
    Customer findCustomersByEmail(String email);

    @Modifying
    @Transactional
    @Query(value = "insert into customer(name, date_of_birth, gender, phone_number, address, email, id_card ,img_customer, id)" +
            " values (:name,:date_of_birth,:gender,:phone_number , :address , :email , :id_card, :img_customer, :id)", nativeQuery = true)
    void saveCustomer(@Param("name") String name,
                      @Param("date_of_birth") String date_of_birth,
                      @Param("gender") String gender,
                      @Param("phone_number") String phoneNumber,
                      @Param("address") String address,
                      @Param("email") String email,
                      @Param("id_card") String idCard,
                      @Param("img_customer") String imgCustomer,
                      @Param("id") Integer id);

}
