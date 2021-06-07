package com.example.peak.controlers;


import com.example.peak.models.Mountain;
import com.example.peak.repository.MountainRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class MountainController {

    private final MountainRepository mountainRepository;

    @Autowired
    public MountainController(MountainRepository mountainRepository) {
        this.mountainRepository = mountainRepository;
    }

    @GetMapping(value = "/mountain/mountains")
    public Iterable<Mountain> getMountains() {
        return mountainRepository.findAll();
    }

    @GetMapping(value = "/mountain/mountainRange")
    public List<String> getMountainsByRange() {
        return mountainRepository.getAllRanges();
    }

    @GetMapping(value = "/mountain/mountainHeight")
    public Double getMaxHeight() {
        return mountainRepository.getMaxHeight();
    }


    @PostMapping(value = "/addNewMountain")
    public void addNewMountains(@RequestBody JsonNode mountain) {

        Mountain newMountain = new Mountain();
        newMountain.setName(mountain.get("name").asText());
        newMountain.setDescription(mountain.get("description").asText());
        newMountain.setHeight(mountain.get("height").asDouble());
        newMountain.setRange(mountain.get("range").asText());
        newMountain.setImage(mountain.get("image").asText());


        mountainRepository.save(newMountain);
    }

    @GetMapping(value = "/mountain/image/{id}")
    public String getFile(@PathVariable("id") Long id){

        Mountain mountain = mountainRepository.findById(id).orElse(null);
        assert mountain != null;
        return mountain.getImage();

    }

    @DeleteMapping("/mountain/delete/{id}")
    public String deleteMountain(@PathVariable("id") Long id){
        Mountain mountain = mountainRepository.findById(id).orElse(null);
        assert mountain!=null;
        mountainRepository.delete(mountain);
        return "Delete";
    }




}
