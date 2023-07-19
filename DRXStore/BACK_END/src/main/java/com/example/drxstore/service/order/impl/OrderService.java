package com.example.drxstore.service.order.impl;

import com.example.drxstore.model.order.Order;
import com.example.drxstore.repository.IOrderRepository;
import com.example.drxstore.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public void save(Order order) {
        orderRepository.save(order);
    }

    @Override
    public Order findById(Integer id) {
        return orderRepository.findById(id).get();
    }
}
