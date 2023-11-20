package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Components.AddPartyHallData;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.Models.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface PartyHallService {

    public PartyHall addPartyHall(AddPartyHallData partyHall, String ownerId) throws Exception;
    public List<PartyHall> getAllPartyHalls();
    public Optional<PartyHall> getPartyHallById(String Id);
    public String deletePartyHall(String partyHallId, String ownerId) throws Exception;
    public List<PartyHall> getPartyHallsByOwner(String ownerId) throws Exception;

    Optional<PartyHall> update(String id, AddPartyHallData partyHall);

    Optional<PartyHall> updateImages(String id, PartyHall partyHall, String image, String work);



    List<PartyHall> filterData(String location, String date, Integer guests, Integer budget);

    PartyHall addRating(Integer rating, String partyHallId, String userId);
}
