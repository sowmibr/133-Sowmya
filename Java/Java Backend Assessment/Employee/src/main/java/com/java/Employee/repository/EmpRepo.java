package com.java.Employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.Employee.entity.EmpEntity;

@Repository
public interface EmpRepo extends JpaRepository<EmpEntity, Long> {

	EmpEntity findEmpById(long id);

	
	

}
