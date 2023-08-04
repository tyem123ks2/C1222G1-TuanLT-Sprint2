package com.example.drxstore.repository;

import com.example.drxstore.model.product.iPhone.PhoneDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IPhoneDetailRepository extends JpaRepository<PhoneDetail, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM phone_detail WHERE (:name IS NULL OR phone_detail.name LIKE CONCAT('%', :name, '%'))", nativeQuery = true)
    Page<PhoneDetail> findAllIPhone(@Param("name") String name, Pageable pageable);
//    IPhoneDetail findByIPhoneDetail(int id);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO phone_detail (name, quantity, price, sell_price, img_iphone, description) " +
            "value (:name, :quantity, :price, :sellPrice, :imgIphone, :description) ",   nativeQuery = true)
    void createPhone (
        @Param("name") String name,
        @Param("quantity") int quantity,
        @Param("price") Long price,
        @Param("sellPrice") Long sellPrice,
        @Param("description") String description,
        @Param("imgIphone") String imgIphone
    );
}
