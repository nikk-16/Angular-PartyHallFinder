package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.AllUsers;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.serviceImpl.AllUsersServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/all")
@RequiredArgsConstructor
public class AllUsersController {
    private final AllUsersServiceImpl allUsersServiceImpl;

    @GetMapping(path="/signin")
    public ResponseEntity<?> signIn(@RequestBody Credentials credentials) {
        try {
            AllUsers user = allUsersServiceImpl.signIn(credentials);

            return ResponseEntity.ok(user);
        } catch (NotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with Email: " + credentials.getEmail());
        } catch (InvalidCredentialsException ex) {
            // handle specific exceptions with custom error messages
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            // handle all other exceptions with a generic error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while signing in. Please try again later.");
        }
    }

    @PostMapping(path="/signup")
    public ResponseEntity<AllUsers> signUp(@RequestBody AllUsers user) throws Exception {
        return ResponseEntity.ok(allUsersServiceImpl.addUser(user));
    }
}
