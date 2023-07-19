package com.example.drxstore.service.orderDetail.impl;

import com.example.drxstore.model.order.OrderDetail;
import com.example.drxstore.repository.IOrderDetailRepository;
import com.example.drxstore.service.orderDetail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void save(OrderDetail orderDetail) {
        orderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAll(Integer id) {
        return orderDetailRepository.findOrderDetailByCustomer_Id(id);
    }

    @Override
    public List<OrderDetail> findAllByOrder(Integer id) {
        return orderDetailRepository.findOrderDetailByOrder_Id(id);
    }
}
