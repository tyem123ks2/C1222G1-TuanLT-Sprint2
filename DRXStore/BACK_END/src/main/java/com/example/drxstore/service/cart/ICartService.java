package com.example.drxstore.service.cart;

import com.example.drxstore.dto.RequestPayment;
import com.example.drxstore.dto.ResponsePayment;
import com.example.drxstore.model.Cart;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface ICartService {
    List<Cart> findAllCart(String name);

    Cart existCart(int idCustomer, int idProduct);

    void decrease(int quantity);

    void increase(int quantity);

    void add(Cart cart);

    void delete(Cart cart);

    Cart findById(int id);

    List<Cart> findCartByCustomerId(int id);

    ResponsePayment payment(RequestPayment requestPayment) throws UnsupportedEncodingException;
}
