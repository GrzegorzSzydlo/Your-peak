package com.example.peak.controlers;


import com.example.peak.models.Mountain;
import com.example.peak.repository.MountainRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MountainController {

    private final MountainRepository mountainRepository;

    public MountainController(MountainRepository mountainRepository) {
        this.mountainRepository = mountainRepository;
    }

    @GetMapping(value = "/mountains")
    public Iterable<Mountain> getMountains() {
        return mountainRepository.findAll();
    }
}
