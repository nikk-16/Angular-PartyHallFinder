package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
@Data
public class Availability {
    private String partyHallId;
    private Date date;
    private boolean isAvailable;
}
