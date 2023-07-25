package com.example.drxstore.controller;

import com.example.drxstore.dto.PaymentDTO;
import com.example.drxstore.model.Cart;
import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.model.order.Order;
import com.example.drxstore.model.order.OrderDetail;
import com.example.drxstore.model.product.iPhone.PhoneDetail;
import com.example.drxstore.security.jwt.JwtProvider;
import com.example.drxstore.security.jwt.JwtTokenFilter;
import com.example.drxstore.service.cart.ICartService;
import com.example.drxstore.service.customer.ICustomerService;
import com.example.drxstore.service.order.IOrderService;
import com.example.drxstore.service.orderDetail.IOrderDetailService;
import com.example.drxstore.service.product.iphone.IIPhoneDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrderRestController {
    @Autowired
    private IIPhoneDetailService iiPhoneDetailService;
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IOrderDetailService iOrderDetailService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/payment")
    public void payment(HttpServletRequest request, @RequestBody PaymentDTO paymentDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<Cart> cartList = iCartService.findAllCart(name);
        Order order = new Order();
        order.setTotalPayment(paymentDTO.getTotalPrice());
        order.setDate(String.valueOf(LocalDate.now()));
        iOrderService.save(order);
        for (int i = 0; i < cartList.size(); i++) {
            PhoneDetail phoneDetail = iiPhoneDetailService.findById(cartList.get(i).getiPhoneDetail().getId());
            phoneDetail.setQuantity(cartList.get(i).getiPhoneDetail().getQuantity() - cartList.get(i).getQuantity());
            iiPhoneDetailService.save(phoneDetail);
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setQuantityOrder(cartList.get(i).getQuantity());
            orderDetail.setiPhoneDetail(cartList.get(i).getiPhoneDetail());
            orderDetail.setCustomer(customer);
            orderDetail.setOrder(order);
            iOrderDetailService.save(orderDetail);
            iCartService.delete(cartList.get(i));
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/history")
    public List<Order> findAllOrderByCustomer(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<OrderDetail> orderDetails = iOrderDetailService.findAll(customer.getId());
        Set<Integer> integers = new HashSet<>();
        List<Order> orders = new ArrayList<>();
        for (int i = 0; i < orderDetails.size(); i++) {
            integers.add(orderDetails.get(i).getOrder().getId());
        }
        List<Integer> count = new ArrayList<>(integers);
        for (int i = 0; i < count.size(); i++) {
            Order order = iOrderService.findById(count.get(i));
            orders.add(order);
        }
        return orders;
    }
}
