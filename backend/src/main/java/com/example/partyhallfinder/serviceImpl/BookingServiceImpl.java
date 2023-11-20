package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.Repositories.BookingRepository;
import com.example.partyhallfinder.Repositories.OwnerRepository;
import com.example.partyhallfinder.Repositories.PartyHallRepository;
import com.example.partyhallfinder.Repositories.UserRepository;
import com.example.partyhallfinder.Services.BookingService;
import com.example.partyhallfinder.payload.BookingDto;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
    private final ModelMapper mapper;

    public BookingDto bookHall(Booking booking){
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

        return mapper.map(bookingRepository.findById(booking.getBookingId()).get(), BookingDto.class);
    }

    @Override
    public BookingDto getBookingById(String id) throws Exception {
        Booking booked;
        try{
            booked = bookingRepository.findById(id).get();
            if(booked == null){
                throw new NotFoundException("No BookingDto by this Id");
            }
            } catch(Exception ex){
                    throw new Exception(ex);
            }
        BookingDto booking = new BookingDto();

        return mapper.map(bookingRepository.findById(id).get(), BookingDto.class);
    }

    public List<BookingDto> getBookingsByUserId(String userId) {
        List<BookingDto> dto = new ArrayList<>();
        for(Booking b: bookingRepository.findBookingsByUserId(userId)){
            dto.add(mapper.map(b, BookingDto.class));
        }
        return dto;
    }

    @Override
    public List<BookingDto> getBookingsByPartyHallId(String partyHallId) {
        List<BookingDto> dto = new ArrayList<>();
        for(Booking b: bookingRepository.findBookingsByPartyHallId(partyHallId)){
            dto.add(mapper.map(b, BookingDto.class));
        }
        return dto;
    }

    @Override
    public List<BookingDto> getAllBookings() {
        List<BookingDto> dto = new ArrayList<>();
        for(Booking b: bookingRepository.findAll()){
            dto.add(mapper.map(b, BookingDto.class));
        }
        return dto;
    }
}
