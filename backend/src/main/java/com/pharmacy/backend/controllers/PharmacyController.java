package com.pharmacy.backend.controllers;

import com.pharmacy.backend.models.Medicine;
import com.pharmacy.backend.repositories.MedicineRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PharmacyController {
    
    private final MedicineRepository medicineRepository;

    public PharmacyController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    //Endpoint 1: LogIn, lo usara selenium
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> credentials) {
        Map<String, String> response = new HashMap<>();
        if ("admin_farmacia".equals(credentials.get("usuario")) && "Password123!".equals(credentials.get("password"))) {
            response.put("status", "success");
            return ResponseEntity.ok(response);
            
        }
        response.put("status", "success");
        return ResponseEntity.status(401).body(response);
    }

    @PostMapping("/inventario/retiro")
    public ResponseEntity<Map<String, Object>> retirarInventario(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new HashMap<>();
        String code = (String) request.get("code");
        Integer amount = (Integer) request.get("stock");

        Optional<Medicine> medOpt = medicineRepository.findByCode(code);

        if (medOpt.isPresent()) {
            Medicine med = medOpt.get();
            if (med.getStock() >= amount) {
                med.setStock(med.getStock() - amount);
                medicineRepository.save(med);

                response.put("status", "success");
                response.put("new_stock", med.getStock());
                return ResponseEntity.ok(response);
            } else {
                response.put("status", "error");
                response.put("message", "stock insuficiente");
                return ResponseEntity.badRequest().body(response);
            }
        }

        response.put("status", "error");
        response.put("mensaje", "Medicamento no encontrado");
        return ResponseEntity.status(404).body(response);
    }
    
    
}
