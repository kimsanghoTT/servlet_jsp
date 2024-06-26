package com.khmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.khmall.dto.Goods;
import com.khmall.service.ProductService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j //log이용해서 db에서 전달해준 값이 잘 출력되는지 확인
public class GoodsController {

	@Autowired
	private ProductService productService;
	
	@PostMapping("/register-product")
	public String insertProduct(Goods goods, Model model){
		
		productService.insertProduct(goods);
		model.addAttribute("msg", "상품이 성공적으로 등록됐습니다.");
		
		//등록한 결과를 볼 수 있는 html로 이동
		return "productList";
	}
	
	@GetMapping("/product-list")
	public String getAllProduct(Model model) {
		
		List<Goods> productList = productService.getAllProduct();
		log.info("상품 전체 목록 : " + productList);
		model.addAttribute("productList",productList);
		
		return "productList";
	}
}
