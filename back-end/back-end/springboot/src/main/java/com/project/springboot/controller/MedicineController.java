package com.project.springboot.controller;

import com.project.springboot.exception.MedicineNotFoundException;
import com.project.springboot.model.Medicines;
import com.project.springboot.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MedicineController {

    @Autowired
    private MedicineRepository medicineRepository;

    @GetMapping("/medicines")
    List<Medicines> getAllMedicines() {
        return medicineRepository.findAll();
    }

    @GetMapping("/medicine/{id}")
    Medicines getMedicineById(@PathVariable Long id) {
        return medicineRepository.findById(id)
                .orElseThrow(() -> new MedicineNotFoundException(id));
    }

    @PostMapping("/medicine")
    Medicines createMedicine(@RequestBody Medicines newMedicine) {
        return medicineRepository.save(newMedicine);
    }

    @PutMapping("/medicine/{id}")
    Medicines updateMedicine(@RequestBody Medicines updatedMedicine, @PathVariable Long id) {
        return medicineRepository.findById(id)
                .map(medicine -> {
                    medicine.setMedicines(updatedMedicine.getMedicines());
                    medicine.setCategory(updatedMedicine.getCategory());
                    medicine.setPrice(updatedMedicine.getPrice());
                    medicine.setManu_date(updatedMedicine.getManu_date());
                    medicine.setDescription(updatedMedicine.getDescription());
                    medicine.setStockQuantity(updatedMedicine.getStockQuantity());
                    // Add more fields to update as needed
                    return medicineRepository.save(medicine);
                })
                .orElseThrow(() -> new MedicineNotFoundException(id));
    }

    @DeleteMapping("/medicine/{id}")
    String deleteMedicine(@PathVariable Long id) {
        if (!medicineRepository.existsById(id)) {
            throw new MedicineNotFoundException(id);
        }
        medicineRepository.deleteById(id);
        return "Medicine with ID " + id + " has been successfully deleted.";
    }
}
