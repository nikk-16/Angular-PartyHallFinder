package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

//@Document(collection = "location")
@Component
@Data
public class Location {
    private Integer pincode;
    private String state;
    private String city;
    private String street;
    private String number;
    private String floor;
}
