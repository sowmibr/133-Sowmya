package com.java.Employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.Employee.entity.EmpEntity;
import com.java.Employee.repository.EmpRepo;

@Service
public class EmpService {

	@Autowired
	EmpRepo  emprepo;
	public EmpEntity findEmpById(long id) {
		// TODO Auto-generated method stub
		 return emprepo.findEmpById(id);
	}

}
