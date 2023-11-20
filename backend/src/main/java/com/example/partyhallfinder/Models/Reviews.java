package com.example.partyhallfinder.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;
import java.time.LocalTime;

@Document(collection = "reviews")
@Data
public class Reviews {
    @Id
    private String reviewId;
    private String partyHallId;
    private String userId;
    private String time;
    private Integer rating;
    private String reviewText;
    private String userName;
    private List<String> replies;
}
