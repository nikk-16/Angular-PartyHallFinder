package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Credentials {
    private String email;
    private String password;
}
