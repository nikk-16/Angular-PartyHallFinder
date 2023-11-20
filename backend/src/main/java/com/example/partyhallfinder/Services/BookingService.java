package com.example.partyhallfinder.Services;


import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.payload.BookingDto;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    public List<BookingDto> getBookingsByUserId(String userId);
    public List<BookingDto> getBookingsByPartyHallId(String partyHallId);

    public List<BookingDto> getAllBookings();
    public BookingDto bookHall(Booking booking);

    BookingDto getBookingById(String id) throws Exception;
}
