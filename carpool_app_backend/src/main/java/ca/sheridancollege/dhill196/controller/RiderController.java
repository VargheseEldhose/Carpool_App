package ca.sheridancollege.dhill196.controller;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ca.sheridancollege.dhill196.beans.Rider;
import ca.sheridancollege.dhill196.repositories.RiderRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/rider")
@CrossOrigin(origins="http://localhost:8080") 
public class RiderController{
	
	private RiderRepository riderRepo;
//	final private String REST_URL = "http://localhost:50000/";
	
	@GetMapping
	public List<Rider> getRiderTrips() {
		return riderRepo.findAll();		
	}
	
	@PostMapping(consumes = "application/json")
	public Rider riderTrip(@RequestBody Rider rider) {
		return riderRepo.save(rider);
	}
	
//	@GetMapping("/i")
//	public List<Rider> getSpecificTrip() {
//		return riderRepo.findAll(Sort.by("name"));
//				}

}
