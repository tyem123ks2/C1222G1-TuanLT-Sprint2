package com.example.drxstore.controller.customer;

import com.example.drxstore.dto.CustomerDTO;
import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.security.jwt.JwtProvider;
import com.example.drxstore.security.jwt.JwtTokenFilter;
import com.example.drxstore.security.response.ResponseMessage;
import com.example.drxstore.service.accountUser.IAccountUserService;
import com.example.drxstore.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CustomerRestController {
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private IAccountUserService accountUserService;


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/user/customer")
    public Customer findCustomer(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return customer;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/public/check-phone/{phone}")
    public ResponseEntity<Boolean> checkPhoneExistence(@PathVariable("phone") String phone) {
        boolean exists = iCustomerService.existByPhone(phone);
        return ResponseEntity.ok(exists);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/public/check-account/{nameAccount}")
    public ResponseEntity<Boolean> checkAccountExistence(@PathVariable("nameAccount") String nameAccount) {
        boolean exists = accountUserService.existByNameAccount(nameAccount);
        return ResponseEntity.ok(exists);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/public/customer/create")
    public ResponseEntity<?> createCustomerAccount(@Valid @RequestBody CustomerDTO customerDTO) {
        if (accountUserService.existByNameAccount(customerDTO.getAccountUser().getNameAccount())) {
            return new ResponseEntity<>(new ResponseMessage("The account existed !!, Try again"), HttpStatus.OK);
        }
        if (iCustomerService.existByEmail(customerDTO.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("The email existed!!, Try again"), HttpStatus.OK);
        }
        iCustomerService.createCustomer(customerDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/public/check-email/{email}")
    public ResponseEntity<Boolean> checkEmailExistence(@PathVariable("email") String email) {
        boolean exists = iCustomerService.existByEmail(email);
        return ResponseEntity.ok(exists);
    }

}
