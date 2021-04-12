package com.example.peak.repository;

import com.example.peak.models.Mountain;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MountainRepository extends CrudRepository<Mountain, Long> {
}
