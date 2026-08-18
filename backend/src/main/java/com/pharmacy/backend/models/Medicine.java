package com.pharmacy.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "medicine")
public class Medicine {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String API;

    @Column(nullable = false)
    private int stock;

    public Medicine() {}

    public Medicine(String code, String name, String API, int stock) {
        this.code = code;
        this.name = name;
        this.API = API;
        this.stock = stock;
    }

    public Long getId() { return id; }
    public String getCode() { return code; }
    public String getName() { return name; }
    public String getAPI() { return API; }
    public int getStock() { return stock; }

    public void setStock(int stock) {
        this.stock = stock;
    }

}
