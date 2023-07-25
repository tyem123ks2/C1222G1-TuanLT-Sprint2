package com.example.drxstore.controller;

import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.model.order.OrderDetail;
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
import java.util.List;

@RestController
@RequestMapping("/api/user/order-detail")
@CrossOrigin("*")
public class OrderDetailRestController {
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
    @GetMapping("/{id}")
    public List<OrderDetail> findAllOrderByCustomer(HttpServletRequest request , @PathVariable("id") Integer id){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return iOrderDetailService.findAllByOrder(id);
    }

}
