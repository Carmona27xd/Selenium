package com.pharmacy.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pharmacy.backend.models.Medicine;
import com.pharmacy.backend.repositories.MedicineRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner initDatabase(MedicineRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				repository.save(new Medicine("PAR-01", "Tempra 500mg", "Paracetamol", 500 ));
				System.out.println("Medicamento de prueba insertado en la BD");
			}
		};
	}

}
