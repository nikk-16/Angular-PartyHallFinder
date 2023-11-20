package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Models.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OwnerRepository extends MongoRepository<Owner, String> {
    Owner findOwnerByEmail(String tempEmail);

    Optional<Owner> findByEmail(String email);
}
