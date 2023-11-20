package com.example.partyhallfinder.Components;


import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class AddPartyHallData {


    private Integer capacity;

    private String city;

    private  boolean conferenceRoom;

    private boolean garden;

    private boolean hall;

    private String imageLink1;

    private String imageLink2;

    private boolean lawn;
    private Integer nonVeg;

    private String partyHallName;

    private boolean poolSide;

    private Integer prices;

    private String state;

    private String street;

    private Integer veg;

    private Integer pincode;
    private double latitudes;
    private double longitudes;

}
