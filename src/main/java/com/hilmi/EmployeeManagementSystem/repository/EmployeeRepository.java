package com.hilmi.EmployeeManagementSystem.repository;

import com.hilmi.EmployeeManagementSystem.model.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
