package com.example.springboot.LargeLoadController;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LargeLoadPerson {
    String firstName;
    String lastName;
    int age;

    public LargeLoadPerson(String f, String l, int age) {
        this.firstName = f;
        this.lastName  = l;
        this.age       = age;
    }


    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}