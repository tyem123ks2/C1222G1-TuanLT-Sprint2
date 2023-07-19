package com.example.drxstore.service.orderDetail;

import com.example.drxstore.model.order.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    void save(OrderDetail orderDetail);
    List<OrderDetail> findAll(Integer id);
    List<OrderDetail> findAllByOrder(Integer id);
}
