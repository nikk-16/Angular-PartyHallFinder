package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class SignupDetails {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String phone;
        private String dob;
        private String img;
}
