package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Models.Reviews;
import com.example.partyhallfinder.Repositories.ReviewsReposirtory;
import com.example.partyhallfinder.Services.ReviewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ReviewsServiceImpl implements ReviewsService {
    private final ReviewsReposirtory reviewsRepository;
    public Reviews addReview(Reviews reviews) {
        System.out.print(reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId()) == null ?"true":"false");
        Reviews review;
        if(reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId()) != null) {
            review = reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId());
        }
        else{
            review = new Reviews();
        }
            System.out.println(review);
            if (review != null) {
                review.setUserId(reviews.getUserId());
                review.setPartyHallId(reviews.getPartyHallId());
                review.setReviewText(reviews.getReviewText());
                review.setReplies(reviews.getReplies());
                review.setRating(reviews.getRating());
                review.setTime(review.getTime());
                review.setUserName(reviews.getUserName());
                reviewsRepository.save(review);
            } else reviewsRepository.save(reviews);

        return reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId());
    }
    public List<Reviews> getReviewsByPartyHallId(String partyHallId){
        return reviewsRepository.findByPartyHallId(partyHallId);
    }

    @Override
    public Reviews getById(String id) {
        return reviewsRepository.findById(id).get();
    }

    @Override
    public List<Reviews> getByUserId(String id) {
        return reviewsRepository.findByUserId(id);
    }

    @Override
    public List<Reviews> getAll() {
        return reviewsRepository.findAll();
    }
}
