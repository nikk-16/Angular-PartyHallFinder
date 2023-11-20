package com.example.partyhallfinder.Controllers;

import com.example.partyhallfinder.Components.AddPartyHallData;
import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.Repositories.PartyHallRepository;
import com.example.partyhallfinder.serviceImpl.PartyHallServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Stream.concat;

@RestController
@RequiredArgsConstructor
public class PartyHallController {
    private final PartyHallServiceImpl partyHallServiceImpl;
    private final PartyHallRepository partyHallRepository;

    @GetMapping("/getAllPartyHalls")
    public ResponseEntity<List<PartyHall>> getAllPartyHalls(){
        return ResponseEntity.ok(partyHallServiceImpl.getAllPartyHalls());
    }
    @GetMapping("/getPartyHallById/{id}")
    public ResponseEntity<Optional<PartyHall>> getPartyHallById(@PathVariable String id){
        return ResponseEntity.ok(partyHallServiceImpl.getPartyHallById(id));
    }
    @GetMapping("/getPartyHallByOwner/{ownerId}")
    public ResponseEntity<List<PartyHall>> getPartyHallByOwner(@PathVariable String ownerId) throws Exception {
        return ResponseEntity.ok(partyHallServiceImpl.getPartyHallsByOwner(ownerId));
    }
    @DeleteMapping("/deletePartyHallById/{ownerId}/{partyHallId}")
    public ResponseEntity<String> deletePartyHall(@PathVariable String ownerId, @PathVariable String partyHallId) throws Exception{
        return ResponseEntity.ok(partyHallServiceImpl.deletePartyHall(partyHallId, ownerId));
    }
    @PostMapping(path = "/update/{id}")
    public ResponseEntity<PartyHall> updatePartyHall(@PathVariable String id, @RequestBody AddPartyHallData partyHall)  {
        return ResponseEntity.ok(partyHallServiceImpl.update(id, partyHall));
    }
    @PutMapping(path = "/updateImages/{id}")
    public ResponseEntity<Optional<PartyHall>> updateHallImages(@PathVariable String id, @RequestBody PartyHall partyHall, @RequestParam String image, @RequestParam String work) {
        return ResponseEntity.ok(partyHallServiceImpl.updateImages(id, partyHall, image, work));
    }

//    @PostMapping(path="/addPartyHall")
//    public ResponseEntity<PartyHall> addPartyHall(@PathVariable String id, @RequestBody AddPartyHallData partyHall)  {
//        return ResponseEntity.ok(partyHallServiceImpl.add(id, partyHall));
//    }

    @GetMapping(path="/filter")
    public ResponseEntity<List<PartyHall>> filterData(@RequestParam(required = false) String location,
                                                      @RequestParam(required = false) String date,
                                                      @RequestParam(required = false) Integer guests,
                                                      @RequestParam(required = false) Integer budget){
//
        return ResponseEntity.ok(partyHallServiceImpl.filterData(location, date, guests, budget));
    }

    @PostMapping(path = "/addRating/{rating}/{partyId}/{userId}")
    public ResponseEntity<PartyHall> addRating(@PathVariable Integer rating, @PathVariable String partyId, @PathVariable String userId){
        return ResponseEntity.ok(partyHallServiceImpl.addRating(rating, partyId, userId));
    }
}
