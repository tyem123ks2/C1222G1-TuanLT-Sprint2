package com.example.drxstore.controller;

import com.example.drxstore.dto.CartCreateDTO;
import com.example.drxstore.dto.UpdateCartDTO;
import com.example.drxstore.model.Cart;
import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.model.product.iPhone.PhoneDetail;
import com.example.drxstore.security.jwt.JwtProvider;
import com.example.drxstore.security.jwt.JwtTokenFilter;
import com.example.drxstore.security.response.ResponseMessage;
import com.example.drxstore.service.cart.ICartService;
import com.example.drxstore.service.customer.ICustomerService;
import com.example.drxstore.service.product.iphone.IPhoneDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user/cart")
@CrossOrigin("*")
public class CartRestController {
    @Autowired
    private ICartService iCartService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IPhoneDetailService phoneDetailService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public ResponseEntity<?> findAllCart(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        if (name == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iCartService.findAllCart(name), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody CartCreateDTO cartCreateDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        if (customer == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        Cart existCart = iCartService.existCart(customer.getId(), cartCreateDTO.getPhoneDetail());
        PhoneDetail phoneDetail = phoneDetailService.findById(cartCreateDTO.getPhoneDetail());
        if (existCart != null) {
            if (phoneDetail.getQuantity() > existCart.getQuantity()) {
                existCart.setQuantity(existCart.getQuantity() + cartCreateDTO.getQuantity());
                iCartService.add(existCart);
                return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }

        } else {
            Cart cart = new Cart();
            if (phoneDetail.getQuantity() >= cartCreateDTO.getQuantity()) {
                cart.setQuantity(cartCreateDTO.getQuantity());
                cart.setCustomer(customer);
                cart.setStatus(cartCreateDTO.isStatus());
                cart.setiPhoneDetail(phoneDetail);
                iCartService.add(cart);
                return new ResponseEntity<>(new ResponseMessage("Thêm vào giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/update")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody UpdateCartDTO updateCartDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        Cart cart = iCartService.existCart(customer.getId(), updateCartDTO.getiPhoneDetail());
        if (cart.getiPhoneDetail().getQuantity() >= updateCartDTO.getQuantity()) {
            cart.setQuantity(updateCartDTO.getQuantity());
            iCartService.add(cart);
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng thành công"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeCart(HttpServletRequest request, @PathVariable("id") Integer id) {
        iCartService.delete(iCartService.findById(id));
        return new ResponseEntity<>(new ResponseMessage("Xoá sản phẩm thành công"), HttpStatus.OK);
    }
}
