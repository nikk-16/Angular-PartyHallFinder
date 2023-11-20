package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Models.Reviews;
import com.example.partyhallfinder.Repositories.ReviewsReposirtory;
import com.example.partyhallfinder.Services.ReviewsService;
import com.example.partyhallfinder.payload.ReviewsDto;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ReviewsServiceImpl implements ReviewsService {
    private final ReviewsReposirtory reviewsRepository;
    private final ModelMapper mapper;
    public ReviewsDto addReview(Reviews reviews) {
        Reviews review;
        if(!reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId()).isEmpty()) {
            review = reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId()).get(0);
        }
        else{
            review = new Reviews();
        }
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

        return mapper.map(reviewsRepository.findByUserIdAndPartyHallId(reviews.getUserId(), reviews.getPartyHallId()).get(0), ReviewsDto.class);
    }
    public List<ReviewsDto> getReviewsByPartyHallId(String partyHallId){
        List<ReviewsDto> dto = new ArrayList<>();
        for(Reviews r: reviewsRepository.findByPartyHallId(partyHallId)){
            dto.add(mapper.map(r, ReviewsDto.class));
        }
        return dto;
    }

    @Override
    public ReviewsDto getById(String id) {
        return mapper.map(reviewsRepository.findById(id).get(), ReviewsDto.class);
    }

    @Override
    public List<ReviewsDto> getByUserId(String id) {
        List<ReviewsDto> dto = new ArrayList<>();
        for(Reviews r: reviewsRepository.findByUserId(id)){
            dto.add(mapper.map(r, ReviewsDto.class));
        }
        return dto;
    }

    @Override
    public List<ReviewsDto> getAll() {
        List<ReviewsDto> dto = new ArrayList<>();
        for(Reviews r: reviewsRepository.findAll()){
            dto.add(mapper.map(r, ReviewsDto.class));
        }
        return dto;
    }
}
