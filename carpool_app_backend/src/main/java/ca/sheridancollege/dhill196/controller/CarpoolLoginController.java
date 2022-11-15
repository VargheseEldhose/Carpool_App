package ca.sheridancollege.dhill196.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.dhill196.beans.CarpoolLogin;
import ca.sheridancollege.dhill196.beans.Rider;
import ca.sheridancollege.dhill196.repositories.CarpoolLoginRepository;
import ca.sheridancollege.dhill196.repositories.RiderRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/rider")
@CrossOrigin(origins="http://localhost:8080") 
public class CarpoolLoginController {

    private CarpoolLoginRepository loginRepo;
//  final private String REST_URL = "http://localhost:50000/";
    
    @GetMapping
    public List<CarpoolLogin> getRiderTrips() {
        return loginRepo.findAll();     
    }
    
    @PostMapping(consumes = "application/json")
    public CarpoolLogin riderTrip(@RequestBody CarpoolLogin login) {
        return loginRepo.save(login);
    }
}