package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Models.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
    Optional<Admin> findByEmail(String tempEmailId);

    Admin findOwnerByEmail(String tempEmail);
}
