package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.payload.BookingDto;
import com.example.partyhallfinder.serviceImpl.BookingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookingController {
    private final BookingServiceImpl bookingServiceImpl;

    @PostMapping(path="/bookHall/{userId}/{partyHallId}")
//    guests=${guests}&payment_id=${payment_id}&amount=${amount}&date=${date}
    public ResponseEntity<BookingDto> bookHall(@PathVariable String userId, @PathVariable String partyHallId, @RequestParam Integer guests, @RequestParam String payment_id, @RequestParam Integer amount, @RequestParam String date, @RequestParam String contact){
        Booking booking = new Booking();
        booking.setUserId(userId);
        booking.setPartyHallId(partyHallId);
        booking.setPaymentId(payment_id);
        booking.setGuests(guests);
        booking.setPayment(amount.doubleValue());
        booking.setDate(date);
        booking.setBookingStatus(true);
        booking.setPaymentStatus(true);
        booking.setContact(contact);
        return ResponseEntity.ok(bookingServiceImpl.bookHall(booking));
    }

    @GetMapping("/searchByUserId/{userId}")
    public ResponseEntity<List<BookingDto>> getBookingsByUserId(@PathVariable String userId){
        return ResponseEntity.ok(bookingServiceImpl.getBookingsByUserId(userId));
    }

    @GetMapping("/searchByPartyHallId/{partyHallId}")
    public ResponseEntity<List<BookingDto>> getBookingsByPartyHallId(@PathVariable String partyHallId){
        return ResponseEntity.ok(bookingServiceImpl.getBookingsByPartyHallId(partyHallId));
    }
    @GetMapping("/getAllBookings")
    public ResponseEntity<List<BookingDto>> getAllBookings(){
        return ResponseEntity.ok(bookingServiceImpl.getAllBookings());
    }

    @GetMapping(path = "/getBookingById/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) throws NotFoundException {
        try {
            return ResponseEntity.ok(bookingServiceImpl.getBookingById(id));
        } catch (NotFoundException ex) { return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking doesn't exist"); }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Some error occured");
        }
    }

}
