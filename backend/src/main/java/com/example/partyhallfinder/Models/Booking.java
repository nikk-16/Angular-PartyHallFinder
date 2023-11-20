package com.example.partyhallfinder.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "bookings")
@Data
public class Booking {
    @Id
    private String bookingId;
    private String partyHallId;
    private String userId;

    private Integer guests;
    private String date;
    private Double payment;
    private String paymentId;
    private Boolean paymentStatus;
    private Boolean bookingStatus;
}
