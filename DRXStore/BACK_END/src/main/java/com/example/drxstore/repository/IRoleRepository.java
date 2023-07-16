package com.example.drxstore.repository;

import com.example.drxstore.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Roles, Integer> {
    Roles findByNameRoles(String name);
}
