package com.example.partyhallfinder.Repositories;


import com.example.partyhallfinder.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findUserByEmail(String tempEmail);

    Optional<User> findByEmail(String tempEmailId);
}
