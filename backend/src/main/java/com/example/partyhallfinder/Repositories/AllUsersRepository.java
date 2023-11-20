package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Models.AllUsers;
import com.example.partyhallfinder.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AllUsersRepository extends MongoRepository<AllUsers, String> {
    AllUsers findAllUsersByEmail(String tempEmail) ;

//    Optional<AllUsers> findByEmail(String tempEmailId);
}
