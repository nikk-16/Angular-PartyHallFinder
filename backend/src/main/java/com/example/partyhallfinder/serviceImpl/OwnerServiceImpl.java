package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Repositories.OwnerRepository;
import com.example.partyhallfinder.Services.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService {
    private final OwnerRepository ownerRepository;

    @Override
    public Owner addOwner(SignupDetails owner) throws Exception {
        String tempEmailId = owner.getEmail();
        if(tempEmailId != null && !tempEmailId.isEmpty()) {
            Optional<Owner> ownerObj = ownerRepository.findByEmail(tempEmailId);
            if(ownerObj.isPresent()) {
                throw new Exception("User with "+tempEmailId+" is already exist");
            }
            else{
                Owner newOwner = new Owner();
                newOwner.setImg(owner.getImg());
                newOwner.setEmail(owner.getEmail());
                newOwner.setDob(owner.getDob());
                newOwner.setPassword(owner.getPassword());
                newOwner.setPhone(owner.getPhone());
                newOwner.setLastName(owner.getLastName());
                newOwner.setFirstName(owner.getFirstName());
                newOwner.setPartyHallIds(new ArrayList<String>());

                ownerRepository.save(newOwner);
            }
        }
        return ownerRepository.findByEmail(tempEmailId).get();
    }
    @Override
    public List<Owner> getAllOwners(){
        return ownerRepository.findAll();
    }
    @Override
    public Optional<Owner> getOwnerById(String id){
        return ownerRepository.findById(id);
    }
    @Override
    public Optional<Owner> getOwnerByEmail(String email){
        return ownerRepository.findByEmail(email);
    }

    @Override
    public Optional<Owner> updateOwner(String id, Owner owner) {
        Optional<Owner> tempOwner = ownerRepository.findById(id);
        if(tempOwner.isPresent()){
            Owner tOwner = tempOwner.get();
            //for updating DOB
            String pattern = "dd-MM-yyyy";
            String newDob = new SimpleDateFormat(pattern).format(owner.getDob());
            tOwner.setDob(newDob);

            tOwner.setFirstName(owner.getFirstName());
            tOwner.setLastName(owner.getLastName());
            tOwner.setPhone(owner.getPhone());
            tOwner.setPassword(owner.getPassword());
            ownerRepository.save(tOwner);
        }
        return ownerRepository.findById(id);
    }

    @Override
    public Owner signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException {
        String tempPassword = credentials.getPassword();
        String tempEmail = credentials.getEmail();
        Owner ownerObj=null;
        if(tempEmail!=null && tempPassword!=null) {
            System.out.println(tempPassword +" "+ tempEmail);
            ownerObj = ownerRepository.findOwnerByEmail(tempEmail);
            if(ownerObj==null) {
                throw new NotFoundException("doesn't Exists");
            }
            else if(!ownerObj.getPassword().equals(tempPassword)){
                throw new InvalidCredentialsException("Invalid password");
            }
        }
        return ownerObj;
    }
}
