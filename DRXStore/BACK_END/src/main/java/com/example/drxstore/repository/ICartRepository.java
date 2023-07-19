package com.example.drxstore.repository;

import com.example.drxstore.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findCartByCustomer_AccountUser_NameAccount(String name);
    Cart findCartByCustomer_IdAndIPhoneDetail_Id(int idCustomer, int apple);
    List<Cart> findCartByCustomer_Id(int id);
}
