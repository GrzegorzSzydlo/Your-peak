package com.example.peak.repository;

import com.example.peak.models.Mountain;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MountainRepository extends CrudRepository<Mountain, Long> {


    @Query(nativeQuery = true, value = "SELECT  m.range FROM mountain AS m GROUP BY m.range ")
    List<String> getAllRanges();

    @Query(nativeQuery = true, value = "SELECT  MAX(height) FROM mountain")
    Double getMaxHeight();

}
