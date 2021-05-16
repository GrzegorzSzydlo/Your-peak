package com.example.peak.controlers;


import com.example.peak.models.User;
import com.example.peak.repository.UserRepository;
import com.example.peak.security.JsonWebTokenProvider;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class UserController {

    private final UserRepository userRepository;
    private final JsonWebTokenProvider webTokenProvider;

    public UserController(UserRepository userRepository, JsonWebTokenProvider webTokenProvider) {
        this.userRepository = userRepository;
        this.webTokenProvider = webTokenProvider;
    }

    @GetMapping(value = "/users/{email}")
    @Nullable
    public User getUser(@PathVariable("email") String email){
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findByEmail(email));
        return optionalUser.orElse(null);
    }

    @PostMapping(value = "/registration")
    public void registration(@RequestBody User user){

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> loggedUser(@RequestBody User details){
        System.out.println(details.getEmail() + " " + details.getPassword());

        String salt = userRepository.getSaltByEmail(details.getEmail());

        if(salt==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        User loginUser = userRepository.getUserByEmailAndPassword(
                details.getEmail(),
                BCrypt.hashpw(
                        details.getPassword(),
                        salt
                )
        );

        if(loginUser == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        Pair<Long, String> userIdWithTokenPair = Pair.of(loginUser.getId(), webTokenProvider.generateToken(loginUser));
        return new ResponseEntity<>(userIdWithTokenPair, HttpStatus.OK);
    }
}
