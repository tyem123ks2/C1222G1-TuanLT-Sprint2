package com.example.drxstore.controller;

import com.example.drxstore.dto.RequestPayment;
import com.example.drxstore.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class PaymentRestController {
    @Autowired
    private ICartService cartService;
    @PostMapping("/payment")
    public ResponseEntity<?> createPayment(@RequestBody RequestPayment requestPayment) throws UnsupportedEncodingException {
        return new ResponseEntity<>(cartService.payment(requestPayment), HttpStatus.OK);
    }
}
