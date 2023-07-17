package com.example.drxstore.service.roles;

import com.example.drxstore.model.Roles;

public interface IRolesService {
    Roles findRolesByName (String name);
}
