package com.project.springboot.exception;

public class MedicineNotFoundException extends RuntimeException{




    public MedicineNotFoundException (Long id){
        super("Could not found the User with id " + id);
    }

}