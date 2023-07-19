package com.example.drxstore.controller.iPhone;

import com.example.drxstore.model.product.iPhone.IPhoneDetail;
import com.example.drxstore.service.product.iphone.IIPhoneDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public/iphone")
@CrossOrigin("*")
public class IPhoneDetailRestController {
    @Autowired
    private IIPhoneDetailService iPhoneDetailService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<IPhoneDetail> showListProduct(@RequestParam(name = "name", defaultValue = "") String name,
                                              @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC, size = 8)
                                                      Pageable pageable) {
        return iPhoneDetailService.findIPhone(name, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        IPhoneDetail iPhoneDetail = iPhoneDetailService.findById(id);
        return new ResponseEntity<>(iPhoneDetail, HttpStatus.OK);
    }
}
