package com.example.partyhallfinder.Models;

import com.example.partyhallfinder.Components.Availability;
import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Components.Features;
import com.example.partyhallfinder.Components.Location;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document(collection = "partyHalls")
@Data
public class PartyHall {
    @Id
    private String partyHallId;
    private String ownerId;
    private String partyHallName;
    private Integer capacity;
    private Double prices;
    private Integer pincode;
    private String state;
    private String city;
    private String street;
    private Features features;
//    private Availability availability;
    private List<BookedDates> bookedDates;
    private List<Reviews> reviews;
    private List<Booking> bookings;
    private List<String> images;
    private double ratings;
    private double total;
    private double latitudes;
    private double longitudes;
}
