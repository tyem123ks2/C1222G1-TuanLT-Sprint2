package com.example.drxstore.service.order;

import com.example.drxstore.model.order.Order;

public interface IOrderService {
    void save (Order order);

    Order findById (Integer id);
}
