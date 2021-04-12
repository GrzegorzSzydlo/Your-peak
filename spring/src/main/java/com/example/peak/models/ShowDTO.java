package com.example.peak.models;


public class ShowDTO {
    private  String name;
    private  String surname;

    @Override
    public String toString() {
        return "ShowDTO{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                '}';
    }

    public ShowDTO(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }
    public ShowDTO (){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
