package com.project.springboot.repository;

import com.project.springboot.model.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicines,Long> {

}

