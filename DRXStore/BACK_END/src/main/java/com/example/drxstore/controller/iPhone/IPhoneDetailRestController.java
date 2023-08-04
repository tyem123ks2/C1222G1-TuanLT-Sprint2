package com.example.drxstore.controller.iPhone;

import com.example.drxstore.dto.PhoneDetailDTO;
import com.example.drxstore.model.product.iPhone.PhoneDetail;
import com.example.drxstore.service.product.iphone.IPhoneDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class IPhoneDetailRestController {
    @Autowired
    private IPhoneDetailService iPhoneDetailService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/public/iphone")
    public Page<PhoneDetail> showListProduct(@RequestParam(name = "name", defaultValue = "", required = false) String name,
                                             Pageable pageable) {
        return iPhoneDetailService.findIPhone(name, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/admin/iphone")
    public Page<PhoneDetail> showListProductAdmin(@RequestParam(name = "name", defaultValue = "", required = false) String name, @PageableDefault(size = 5)
            Pageable pageable) {
        return iPhoneDetailService.findIPhone(name, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/public/iphone/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        PhoneDetail phoneDetail = iPhoneDetailService.findById(id);
        return new ResponseEntity<>(phoneDetail, HttpStatus.OK);
    }

    @PostMapping(value = "admin/iphone/create")
    public ResponseEntity<?> createDiscount(@Valid @RequestBody PhoneDetailDTO phoneDetailDTO, BindingResult bindingResult) {
        new PhoneDetailDTO().validate(phoneDetailDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        iPhoneDetailService.createPhone(phoneDetailDTO.getName(), phoneDetailDTO.getQuantity(),
                phoneDetailDTO.getPrice(), phoneDetailDTO.getSellPrice(), phoneDetailDTO.getImgIphone(), phoneDetailDTO.getDescription());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
