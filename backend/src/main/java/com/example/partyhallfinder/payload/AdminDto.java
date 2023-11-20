package com.example.partyhallfinder.payload;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
public class AdminDto {
    private String id;
    private String lastName;
    private String firstName;
    private String email;
    private String img;
    private String dob;
    private String phone;
    private String password;
}
