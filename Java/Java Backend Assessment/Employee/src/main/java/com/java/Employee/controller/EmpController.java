package com.java.Employee.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.Employee.entity.EmpEntity;
import com.java.Employee.service.EmpService;

@RestController
@RequestMapping("/employees")
public class EmpController {
	
	EmpService empserv;
	

	@GetMapping("/{id}")
    public ResponseEntity<EmpEntity> getEmpById(@PathVariable long id){
    	
    	EmpEntity emp= empserv.findEmpById(id);
    	
    	return ResponseEntity.ok(emp);
    }

}
