package com.example.partyhallfinder.payload;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
public class BookingDto {

    private String bookingId;
    private String partyHallId;
    private String userId;
    private String contact;
    private Integer guests;
    private String date;
    private Double payment;
    private String paymentId;
    private Boolean paymentStatus;
    private Boolean bookingStatus;
}
