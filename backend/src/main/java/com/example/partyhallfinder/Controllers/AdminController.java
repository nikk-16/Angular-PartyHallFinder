package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.AlreadyExistsException;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Admin;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.payload.AdminDto;
import com.example.partyhallfinder.serviceImpl.AdminServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminServiceImpl adminServiceImpl;

    @PostMapping(path="/signup")
    public ResponseEntity<?> signUp(@RequestBody SignupDetails admin)throws Exception {
        try {
            return ResponseEntity.ok(adminServiceImpl.addAdmin(admin));
        } catch (AlreadyExistsException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User already exists with " + admin.getEmail());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while signing in. Please try again later.");
        }
    }

    @PostMapping(path="/signin")
    public ResponseEntity<?> signIn(@RequestBody Credentials credentials) {
        try {
            AdminDto admin = adminServiceImpl.signIn(credentials);

            return ResponseEntity.ok(admin);
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
    @GetMapping(path = "/getAdminById/{id}")
    public ResponseEntity<AdminDto> getAdminById(@PathVariable String id){
        return ResponseEntity.ok(adminServiceImpl.getAdminById(id));
    }
}
