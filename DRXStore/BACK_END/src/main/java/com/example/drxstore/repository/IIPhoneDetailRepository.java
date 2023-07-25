package com.example.drxstore.repository;

import com.example.drxstore.model.product.iPhone.PhoneDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IIPhoneDetailRepository extends JpaRepository<PhoneDetail, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM phone_detail WHERE (:name IS NULL OR phone_detail.name LIKE CONCAT('%', :name, '%'))", nativeQuery = true)
    Page<PhoneDetail> findAllIPhone(@Param("name") String name, Pageable pageable);
//    IPhoneDetail findByIPhoneDetail(int id);

}
