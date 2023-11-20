package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Models.Owner;

import java.util.List;
import java.util.Optional;

public interface OwnerService {

    public Owner addOwner(SignupDetails owner) throws Exception;
    public List<Owner> getAllOwners();
    public Optional<Owner> getOwnerById(String id);
    public Optional<Owner> getOwnerByEmail(String email);
    public Optional<Owner> updateOwner(String id, Owner owner) throws Exception;
    public Owner signIn(Credentials credentials) throws Exception;
}
