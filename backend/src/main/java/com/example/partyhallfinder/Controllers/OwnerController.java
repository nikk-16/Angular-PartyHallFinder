package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Components.AddPartyHallData;
import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.AlreadyExistsException;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.serviceImpl.OwnerServiceImpl;
import com.example.partyhallfinder.serviceImpl.PartyHallServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/owner")
@RequiredArgsConstructor
public class OwnerController {
    private final OwnerServiceImpl ownerServiceImpl;
    private final PartyHallServiceImpl partyHallServiceImpl;

    @PostMapping(path="/signup")
    public ResponseEntity<?> signUp(@RequestBody SignupDetails owner)throws Exception {
        try {
            return ResponseEntity.ok(ownerServiceImpl.addOwner(owner));
        } catch (AlreadyExistsException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User already exists with " + owner.getEmail());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while signing in. Please try again later.");
        }
    }

    @PostMapping(path="/signin")
    public ResponseEntity<?> signIn(@RequestBody Credentials credentials) {
        try {
            Owner owner = ownerServiceImpl.signIn(credentials);

            return ResponseEntity.ok(owner);
        } catch (NotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Owner not found with Email: " + credentials.getEmail());
        } catch (InvalidCredentialsException ex) {
            // handle specific exceptions with custom error messages
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            // handle all other exceptions with a generic error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while signing in. Please try again later.");
        }
    }
    @GetMapping("/getAllOwners")
    public ResponseEntity<List<Owner>> getAllOwners(){
        return ResponseEntity.ok(ownerServiceImpl.getAllOwners());
    }
    @GetMapping("/getOwnerById/{id}")
    public ResponseEntity<Optional<Owner>> getOwnerById(@PathVariable String id){
        return ResponseEntity.ok(ownerServiceImpl.getOwnerById(id));
    }
    @GetMapping("/getOwnerByEmail/{email}")
    public ResponseEntity<Optional<Owner>> getOwnerByEmail(@PathVariable String email){
        return ResponseEntity.ok(ownerServiceImpl.getOwnerByEmail(email));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Optional<Owner>> updateOwner(@PathVariable String id, @RequestBody Owner owner) throws Exception {
        return ResponseEntity.ok(ownerServiceImpl.updateOwner(id, owner));
    }


    @PostMapping("/{ownerId}/addPartyHall")
    public ResponseEntity<PartyHall> addPartyHall(@PathVariable String ownerId , @RequestBody AddPartyHallData partyHall) throws Exception{

        return ResponseEntity.ok(partyHallServiceImpl.addPartyHall(partyHall, ownerId));
    }


}
