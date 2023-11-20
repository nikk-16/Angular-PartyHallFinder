package com.example.partyhallfinder.Services;


import com.example.partyhallfinder.Models.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    public List<Booking> getBookingsByUserId(String userId);
    public List<Booking> getBookingsByPartyHallId(String partyHallId);

    public List<Booking> getAllBookings();
    public Optional<Booking> bookHall(Booking booking);

    Booking getBookingById(String id);
}
