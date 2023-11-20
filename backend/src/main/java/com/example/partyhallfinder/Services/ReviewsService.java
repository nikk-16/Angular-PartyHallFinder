package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Models.Reviews;
import com.example.partyhallfinder.payload.ReviewsDto;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public interface ReviewsService {
    ReviewsDto addReview(Reviews reviews);
    
    List<ReviewsDto> getReviewsByPartyHallId(String partyHallId);

    ReviewsDto getById(String id);

    List<ReviewsDto> getByUserId(String id);

    List<ReviewsDto> getAll();
}
