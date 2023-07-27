package com.example.drxstore.service.customer.impl;
import com.example.drxstore.dto.CustomerDTO;
import com.example.drxstore.model.AccountUser;
import com.example.drxstore.model.Roles;
import com.example.drxstore.model.customer.Customer;
import com.example.drxstore.repository.IAccountUserRepository;
import com.example.drxstore.repository.ICustomerRepository;
import com.example.drxstore.repository.IRoleRepository;
import com.example.drxstore.service.customer.ICustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private IAccountUserRepository iAccountUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IRoleRepository rolesRepository;


    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }

    @Override
    public Boolean existByEmail(String email) {
        Customer customer = iCustomerRepository.findCustomersByEmail(email);
        if (customer != null) {
            return true;
        }
        return false;
    }

    @Override
    public void createCustomer(CustomerDTO customerDTO) {
        iAccountUserRepository.createAccountUser(customerDTO.getAccountUser().getNameAccount(),
                passwordEncoder.encode(customerDTO.getAccountUser().getPasswordAccount()));
        AccountUser accountUser = iAccountUserRepository
                .findAccountUserByNameAccount(customerDTO.getAccountUser().getNameAccount());
        Set<Roles> roles = new HashSet<>();
        roles.add(rolesRepository.findByNameRoles("USER"));
        accountUser.setRoles(roles);
        Customer customer = new Customer();
        customer.setAccountUser(accountUser);
        BeanUtils.copyProperties(customerDTO, customer);
        iCustomerRepository.saveCustomer(
                customer.getName(),
                customer.getDateOfBirth(),
                customer.getGender(),
                customer.getPhoneNumber(),
                customer.getAddress(),
                customer.getEmail(),
                customer.getIdCard(),
                customer.getImgCustomer(),
                accountUser.getId()
        );
    }

    @Override
    public Boolean existByPhone(String phone) {
        Customer customer = iCustomerRepository.findCustomersByPhoneNumber(phone);
        if (customer != null) {
            return true;
        }
        return false;
    }
}
