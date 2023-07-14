package com.example.drxstore.service.accountUser;


import com.example.drxstore.dto.accounUserDTO.AccountUserDTO;
import com.example.drxstore.model.AccountUser;

public interface IAccountUserService {
    AccountUser findAccountUserByNameAccount(String name);
    Boolean existByNameAccount(String name);
    AccountUser saveAccountUser(AccountUser accountUser);
    AccountUser findAccountUserByEmail(String email);
    void updatePassword(AccountUserDTO accountUserDTO, Integer id);

    AccountUser findById(int id);
}
