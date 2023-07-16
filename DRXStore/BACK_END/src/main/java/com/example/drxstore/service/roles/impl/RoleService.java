package com.example.drxstore.service.roles.impl;

import com.example.drxstore.model.Roles;
import com.example.drxstore.repository.IRoleRepository;
import com.example.drxstore.service.roles.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public Roles findRoleByName(String name) {
        return iRoleRepository.findByNameRoles(name);
    }
}
