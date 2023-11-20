package com.example.partyhallfinder.payload;

import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Components.Features;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.Models.Reviews;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class PartyHallDto {

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
