package com.example.peak.security;

import com.example.peak.models.User;
import com.example.peak.repository.SigningKeyRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class JsonWebTokenProvider {
    public String generateToken(User user) {

        Key signingKey = new SecretKeySpec(SigningKeyRepository.getSigningKey().getBytes(StandardCharsets.UTF_8), SignatureAlgorithm.HS512.getJcaName());
        String name = user.getUsername();

        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .claim("name", name)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+36000000))
                .signWith(SignatureAlgorithm.HS512, signingKey)
                .compact();
    }
}
