package com.example.drxstore.model.order;

import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.model.product.iPhone.PhoneDetail;

import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_detail")
    private Integer id;
    @Column(name = "quantity_order")
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(columnDefinition = "phone_detail_id")
    private PhoneDetail phoneDetail;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_order")
    private Order order;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_user")
    private Customer customer;

    public OrderDetail() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public PhoneDetail getiPhoneDetail() {
        return phoneDetail;
    }

    public void setiPhoneDetail(PhoneDetail phoneDetail) {
        this.phoneDetail = phoneDetail;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
