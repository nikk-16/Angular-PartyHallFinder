package com.example.partyhallfinder.payload;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class ReviewsDto {
    private String reviewId;
    private String partyHallId;
    private String userId;
    private String time;
    private Integer rating;
    private String reviewText;
    private String userName;
    private List<String> replies;
}
