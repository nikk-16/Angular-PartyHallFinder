package com.example.partyhallfinder.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admin")
@Data
public class Admin {
    @Id
    private String id;
    private String lastName;
    private String firstName;
    private String email;
    private String img;
    private String dob;
    private String phone;
    private String password;
}
