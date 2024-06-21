package com.project.springboot.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Medicines {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "`medicines`",length = 255,nullable = false)
    private String medicines;
    @Column(name = "category",length = 20,nullable = false)
    private String category;
    @Column(name = "price",length = 25,nullable = false)
    private int price;
    @Column(name = "manu_date",nullable = false)
    private Date manu_date;

    @Column(name = "description",length = 255,nullable = false)
    private String description;




    @Column(name = "stock_quantity",length=500,nullable = false)
    private int stockQuantity;


    public Medicines(long id, String medicines, String category, int price, Date manu_date, String description, int stockQuantity) {
        this.id = id;
        this.medicines = medicines;
        this.category = category;
        this.price = price;
        this.manu_date = manu_date;
        this.description = description;
        this.stockQuantity = stockQuantity;
    }

    public Medicines() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMedicines() {
        return medicines;
    }

    public void setMedicines(String medicines) {
        this.medicines = medicines;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getManu_date() {
        return manu_date;
    }

    public void setManu_date(Date manu_date) {
        this.manu_date = manu_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    @Override
    public String toString() {
        return "Medicines{" +
                "id=" + id +
                ", medicines='" + medicines + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                ", manu_date=" + manu_date +
                ", description='" + description + '\'' +
                ", stockQuantity=" + stockQuantity +
                '}';
    }
}
