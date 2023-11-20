package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Models.Reviews;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public interface ReviewsService {
    Reviews addReview(Reviews reviews);
    
    List<Reviews> getReviewsByPartyHallId(String partyHallId);

    Reviews getById(String id);

    List<Reviews> getByUserId(String id);

    List<Reviews> getAll();
}
