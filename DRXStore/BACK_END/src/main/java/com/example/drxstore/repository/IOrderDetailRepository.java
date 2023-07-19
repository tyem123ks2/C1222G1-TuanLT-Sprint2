package com.example.drxstore.repository;

import com.example.drxstore.model.order.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    List<OrderDetail> findOrderDetailByCustomer_Id(Integer id);
    List<OrderDetail> findOrderDetailByOrder_Id(Integer id);
}
