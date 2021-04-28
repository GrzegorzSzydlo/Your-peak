package com.example.peak.controlers;


import com.example.peak.models.Mountain;
import com.example.peak.models.File;
import com.example.peak.repository.FileRepository;
import com.example.peak.repository.MountainRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000" ,exposedHeaders = {"Content-Disposition"})
public class MountainController {

    private final FileRepository fileRepository;
    private final MountainRepository mountainRepository;
    private File file;

    public MountainController(FileRepository fileRepository, MountainRepository mountainRepository) {
        this.fileRepository = fileRepository;
        this.mountainRepository = mountainRepository;
    }

    @GetMapping(value = "/mountains")
    public Iterable<Mountain> getMountains() {
        return mountainRepository.findAll();
    }

    @GetMapping(value = "/mountainRange")
    public List<String> getMountainsByRange() {
        return mountainRepository.getAllRanges();
    }


    @PostMapping(value = "/mountain/addNewMountain")
    public void addNewMountains(@RequestBody Mountain mountain) {


        Mountain newMountain = new Mountain();
        newMountain.setName(mountain.getName());
        newMountain.setDescription(mountain.getDescription());
        newMountain.setHeight(mountain.getHeight());
        newMountain.setRange(mountain.getRange());
        newMountain.setFile(file);


        mountainRepository.save(newMountain);
    }

    @PostMapping(value = "/mountain/addFile")
    public ResponseEntity<Void> addFile(@NotNull @RequestParam("file") MultipartFile multipartFile) throws IOException {
        file = new File(multipartFile.getOriginalFilename(), multipartFile.getContentType(), multipartFile.getBytes());

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping(value = "/mountain/file/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable("id") Long id){

        File fileMountain  = fileRepository.findById(id).get();

        HttpHeaders header = new HttpHeaders();

        header.setContentType(MediaType.valueOf(fileMountain.getContentType()));
        header.setContentLength(fileMountain.getData().length);
        header.set("Content-Disposition", "attachment; filename=" + fileMountain.getFileName());

        return new ResponseEntity<>(fileMountain.getData(), header, HttpStatus.OK);
    }


}
