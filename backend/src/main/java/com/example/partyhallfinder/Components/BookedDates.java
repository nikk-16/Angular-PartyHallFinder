package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
@Data
public class BookedDates {
    private String date;
    private String partyHallId;
    private String userId;
}
