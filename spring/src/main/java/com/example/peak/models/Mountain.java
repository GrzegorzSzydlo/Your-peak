package com.example.peak.models;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="`mountain`")
public class Mountain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String name;
    @NotEmpty
    private String description;
    @NotEmpty
    private Long height;

    private String range;
    private String image;

    public Mountain(@NotEmpty String name, @NotEmpty String description, @NotEmpty Long height, String range, String image) {
        this.name = name;
        this.description = description;
        this.height = height;
        this.range = range;
        this.image = image;
    }

    public Mountain() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getHeight() {
        return height;
    }

    public void setHeight(Long height) {
        this.height = height;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
