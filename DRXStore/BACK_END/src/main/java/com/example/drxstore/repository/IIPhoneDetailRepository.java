package com.example.drxstore.repository;

import com.example.drxstore.model.product.iPhone.IPhoneDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IIPhoneDetailRepository extends JpaRepository<IPhoneDetail, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM iphone_detail WHERE (:name IS NULL OR iphone_detail.name LIKE CONCAT('%', :name, '%'))", nativeQuery = true)
    Page<IPhoneDetail> findAllIPhone(@Param("name") String name, Pageable pageable);
//    IPhoneDetail findByIPhoneDetail(int id);

}
