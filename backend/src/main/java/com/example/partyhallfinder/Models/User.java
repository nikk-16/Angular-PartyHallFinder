package com.example.partyhallfinder.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@Document(collection = "Users")
@Data
public class User {
    @Id
    private String id;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String phone;
    private String dob;
    private String img;
    private List<String> searches;
    private List<String> bookedPartyHallIds;
    private String viewingId;


}
