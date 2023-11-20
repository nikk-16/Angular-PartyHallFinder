package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Models.Reviews;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsReposirtory extends MongoRepository<Reviews, String> {
    List<Reviews> findByPartyHallId(String partyHallId);

    List<Reviews> findByUserId(String id);

    Reviews findByUserIdAndPartyHallId(String partyHallId, String userId);
}
