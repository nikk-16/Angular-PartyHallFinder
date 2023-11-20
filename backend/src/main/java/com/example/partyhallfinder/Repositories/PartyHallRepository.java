package com.example.partyhallfinder.Repositories;

import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Models.PartyHall;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface PartyHallRepository extends MongoRepository<PartyHall, String> {
    Optional<PartyHall> findPartyHallByPartyHallId(String id);

    Optional<List<PartyHall>> findPartyHallByCity(String location);

    Optional<List<PartyHall>> findAllByBookedDates(BookedDates date);

    Optional<List<PartyHall>> findPartyHallByCapacityLessThanEqual(Integer guests);

    Optional<List<PartyHall>> findPartyHallByPrices(Integer budget);

//    List<PartyHall> findPartyHallByOwnerId(String id);
    List<PartyHall> getByPartyHallName(String partyHallName);
    PartyHall getPartyHallByOwnerIdAndPartyHallName(String ownerId, String partyHallName);

}
