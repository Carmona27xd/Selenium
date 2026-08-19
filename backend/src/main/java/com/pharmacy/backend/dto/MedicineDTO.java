package com.pharmacy.backend.dto;

public class MedicineDTO {

    private String code;
    private String API;
    private int stock;
    private String name;

    public String getName() { return name; }
    public void setName(String name) { 
        this.name = name;
    }

    public String getCode() { return code; }
    public void setCode(String code) {
        this.code = code;
    }

    public String getAPI() { return API; }
    public void setAPI(String API) {
        this.API = API;
    }

    public int getStock() { return stock; }
    public void setStock(Integer stock) {
        this.stock = stock;
    }
}