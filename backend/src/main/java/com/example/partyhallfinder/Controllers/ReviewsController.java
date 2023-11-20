package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Models.Reviews;
import com.example.partyhallfinder.Repositories.ReviewsReposirtory;
import com.example.partyhallfinder.payload.ReviewsDto;
import com.example.partyhallfinder.serviceImpl.ReviewsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor

public class ReviewsController {
    private final ReviewsServiceImpl reviewsService;

    @PostMapping(path = "addReview")
    public ResponseEntity<ReviewsDto> addReview(@RequestBody Reviews reviews){
        return ResponseEntity.ok(reviewsService.addReview(reviews));
    }

    @GetMapping(path = "getByPartyHallId/{id}")
    public ResponseEntity<List<ReviewsDto>> getByPartyHallId(@PathVariable String id){
        return ResponseEntity.ok(reviewsService.getReviewsByPartyHallId(id));
    }

    @GetMapping(path = "getById/{id}")
    public ResponseEntity<ReviewsDto> getById(@PathVariable String id){
        return ResponseEntity.ok(reviewsService.getById(id));
    }

    @GetMapping(path = "getByUserId/{id}")
    public ResponseEntity<List<ReviewsDto>> getByUserId(@PathVariable String id){
        return ResponseEntity.ok(reviewsService.getByUserId(id));
    }
    @GetMapping(path = "getAll")
    public ResponseEntity<List<ReviewsDto>> getAll(){
        return ResponseEntity.ok(reviewsService.getAll());
    }
}
