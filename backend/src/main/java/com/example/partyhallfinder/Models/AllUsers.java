package com.example.partyhallfinder.Models;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "allUsers")
@Data
public class AllUsers {
    @Id
    private String id;

    @NotBlank
    private String email;
    @NotEmpty
    private String password;
    @NotEmpty
    private String role;
    @NotEmpty
    private String firstname;
    @NotEmpty
    private String lastname;
    @NotEmpty
    private Long phone;
}
