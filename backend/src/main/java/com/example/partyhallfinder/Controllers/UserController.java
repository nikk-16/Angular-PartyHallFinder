package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.AlreadyExistsException;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.payload.UserDto;
import com.example.partyhallfinder.serviceImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImpl userServiceImpl;

    @PostMapping(path="/signup")
    public ResponseEntity<?> signUp(@RequestBody SignupDetails user) throws Exception {
        try {
            return ResponseEntity.ok(userServiceImpl.addUser(user));
        } catch (AlreadyExistsException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User already exists with " + user.getEmail());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while signing in. Please try again later.");
        }
    }

    @PostMapping(path="/signin")
    public ResponseEntity<?> signIn(@RequestBody Credentials credentials) {
        try {
            UserDto user = userServiceImpl.signIn(credentials);

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

    @GetMapping(path = "getUserById/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable String id){
        return ResponseEntity.ok(userServiceImpl.getUser(id));
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable String id, @RequestBody User user) throws Exception {
        return ResponseEntity.ok(userServiceImpl.update(id, user));
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(userServiceImpl.delete(id));
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<UserDto>> getAll() throws Exception {
        return ResponseEntity.ok(userServiceImpl.getAll());
    }

    @GetMapping("/getViewingId/{userId}")
    public ResponseEntity<String> getViewingId(@PathVariable String userId) throws Exception {
        return ResponseEntity.ok(userServiceImpl.getViewingId(userId));
    }
    @PostMapping("/updateViewingId/{userId}/{id}")
    public ResponseEntity<String> setViewingId(@PathVariable String userId, @PathVariable String id) throws Exception {

        System.out.println(userId);
        return ResponseEntity.ok(userServiceImpl.updateViewingId(userId, id));
    }

}
