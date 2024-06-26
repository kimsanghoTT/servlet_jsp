package com.khmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.khmall.dto.Goods;

@Mapper
public interface ProductMapper {

	void insertProduct(Goods goods);
	
	// 상품을 모두 가져올 때는 List, Array, 배열 사용
	//List로 상품을 진열, -> 상품 리스트 목록
	List<Goods> getAllProduct();
}
