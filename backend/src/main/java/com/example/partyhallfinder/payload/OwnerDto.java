package com.example.partyhallfinder.payload;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class OwnerDto {

    private String id;
    private String lastName;
    private String firstName;
    private String email;
    private String img;
    private String dob;
    private String phone;
    private String password;
    private List<String> partyHallIds;
}
