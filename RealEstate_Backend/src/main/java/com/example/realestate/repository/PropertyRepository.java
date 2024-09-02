package com.example.realestate.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realestate.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long>{

}
