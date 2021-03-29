package com.example.peak.controlers;

import com.example.peak.models.User;
import com.example.peak.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class Start {

    private final UserRepository userRepository;
    @Autowired
    public Start(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @EventListener(ApplicationReadyEvent.class)
    public void runExample() {
        User user = new User("Grzegorz","Szydlo", 10);
        userRepository.save(user);
    }
}
