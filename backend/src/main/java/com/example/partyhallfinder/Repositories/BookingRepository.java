package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Models.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findBookingsByUserId(String userId);

    List<Booking> findBookingsByPartyHallId(String partyHallId);

    List<Booking> findBookingsByPaymentId(String paymentId);
}
