package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.Repositories.BookingRepository;
import com.example.partyhallfinder.Repositories.OwnerRepository;
import com.example.partyhallfinder.Repositories.PartyHallRepository;
import com.example.partyhallfinder.Repositories.UserRepository;
import com.example.partyhallfinder.Services.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private  final PartyHallRepository partyHallRepository;
    private  final UserRepository userRepository;

    public Optional<Booking> bookHall(Booking booking){
        bookingRepository.save(booking);
        Optional<PartyHall> partyHall = partyHallRepository.findById(booking.getPartyHallId());
        if(partyHall.isPresent()){
            PartyHall tempParty = partyHall.get();
            tempParty.setTotal(tempParty.getTotal()+booking.getPayment()/100);
            List<BookedDates> bookedDates = tempParty.getBookedDates();
            List<Booking> books = tempParty.getBookings();
            if(books == null){
                books = new ArrayList<>();
            }
            books.add(bookingRepository.findById(booking.getBookingId()).get());

            BookedDates bookingDate = new BookedDates();
            bookingDate.setDate(booking.getDate());
            bookingDate.setUserId(booking.getUserId());
            bookingDate.setPartyHallId(booking.getPartyHallId());

            bookedDates.add(bookingDate);
            tempParty.setBookedDates(bookedDates);
            tempParty.setBookings(books);

            partyHallRepository.save(tempParty);
        }
        String payId = bookingRepository.findBookingsByPaymentId(booking.getPaymentId()).get(0).getBookingId();
        Optional<User> user = userRepository.findById(booking.getUserId());
        if(user.isPresent()){
            User tempUser = user.get();
            List<String> bookedPartyHalls = tempUser.getBookedPartyHallIds();
            if(bookedPartyHalls == null){
                bookedPartyHalls = new ArrayList<>();
            }
            else{
                bookedPartyHalls.add(payId);
            }
            tempUser.setBookedPartyHallIds(bookedPartyHalls);
            userRepository.save(tempUser);
        }
        return bookingRepository.findById(booking.getBookingId());
    }

    @Override
    public Booking getBookingById(String id) {
        System.out.println(bookingRepository.findById(id).get());
        return bookingRepository.findById(id).get();
    }

    public List<Booking> getBookingsByUserId(String userId) {
        return bookingRepository.findBookingsByUserId(userId);
    }

    @Override
    public List<Booking> getBookingsByPartyHallId(String partyHallId) {
        return bookingRepository.findBookingsByPartyHallId(partyHallId);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
