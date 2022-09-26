package ca.sheridancollege.dhill196.controller;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.dhill196.beans.Driver;
import ca.sheridancollege.dhill196.repositories.DriverRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/driver")
@CrossOrigin(origins="http://localhost:8080") 
public class DriverController {
private DriverRepository driverRepo;

@GetMapping
public List<Driver> getDriverPosts() {
	return driverRepo.findAll();		
}

@PostMapping(consumes = "application/json")
public Driver DriverPost(@RequestBody Driver driver) {
	return driverRepo.save(driver);
}

@GetMapping("/i")
public List<Driver> getSpecificTrip() {
	return driverRepo.findAll(Sort.by("name"));
			}
}
