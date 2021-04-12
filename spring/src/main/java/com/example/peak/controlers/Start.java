package com.example.peak.controlers;

import com.example.peak.models.ShowDTO;
import com.example.peak.models.User;
import com.example.peak.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Start {

    private final UserRepository userRepository;
    @Autowired
    public Start(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public Iterable<User> runExample() {
//        User user = new User("Grzegorz","Szydlo", 10);
//        userRepository.save(user);
        return userRepository.findAll();
    }

    @PostMapping(value = "/names")
    public void show(@RequestBody ShowDTO allParams){
        System.out.println("Otrzymałem " + allParams);
    }

    @PostMapping(value = "/names/{id}")
    public void show2(@PathVariable int id){
        System.out.println("Otrzymałem" + id);
    }

}
