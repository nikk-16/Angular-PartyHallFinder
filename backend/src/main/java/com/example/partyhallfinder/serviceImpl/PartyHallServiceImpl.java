package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.AddPartyHallData;
import com.example.partyhallfinder.Components.BookedDates;
import com.example.partyhallfinder.Components.Features;
import com.example.partyhallfinder.Models.Booking;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Models.PartyHall;
import com.example.partyhallfinder.Models.Reviews;
import com.example.partyhallfinder.Repositories.OwnerRepository;
import com.example.partyhallfinder.Repositories.PartyHallRepository;
import com.example.partyhallfinder.Repositories.ReviewsReposirtory;
import com.example.partyhallfinder.Services.PartyHallService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Stream.concat;


@Service
@RequiredArgsConstructor
public class PartyHallServiceImpl implements PartyHallService {

    private final PartyHallRepository partyHallRepository;
    private final OwnerRepository ownerRepository;
    private final ReviewsReposirtory reviewsRepository;

    @Override
    public PartyHall addPartyHall(AddPartyHallData partyHall, String ownerId) throws Exception{
        PartyHall tPartyHall = new PartyHall();
        tPartyHall.setOwnerId(ownerId);
        tPartyHall.setCity(partyHall.getCity());
        tPartyHall.setPincode(partyHall.getPincode());
        tPartyHall.setStreet(partyHall.getStreet());
        tPartyHall.setState(partyHall.getState());
        tPartyHall.setLatitudes(partyHall.getLatitudes());
        tPartyHall.setLongitudes(partyHall.getLongitudes());

        List<BookedDates> b= new ArrayList<>();
        tPartyHall.setBookedDates(b);
        List<Reviews> r = new ArrayList<>();
        tPartyHall.setReviews(r);
        List<Booking> bo = new ArrayList<>();
        tPartyHall.setBookings(bo);
        tPartyHall.setRatings(0.0);
        Features ft = new Features();
//            Features ft = tPartyHall.getFeatures();
            ft.setHall(partyHall.isHall());
            ft.setLawn(partyHall.isLawn());
            ft.setVeg(partyHall.getVeg());
            ft.setGarden(partyHall.isGarden());
            ft.setNonVeg(partyHall.getNonVeg());
            ft.setPoolSide(partyHall.isPoolSide());
            ft.setConferenceRoom(partyHall.isConferenceRoom());
            tPartyHall.setFeatures(ft);
            tPartyHall.setCapacity(partyHall.getCapacity());

            List<String> imgs = new ArrayList<>();
            imgs.add(partyHall.getImageLink1());
            imgs.add(partyHall.getImageLink2());
            tPartyHall.setImages(imgs);
            tPartyHall.setPrices(Double.valueOf(partyHall.getPrices()));
            tPartyHall.setPartyHallName(partyHall.getPartyHallName());
            partyHallRepository.save(tPartyHall);


        String tempPartyHallId = partyHallRepository.getByPartyHallName(partyHall.getPartyHallName()).get(0).getPartyHallId();
            Optional<Owner> update = ownerRepository.findById(ownerId);
            if(update.isPresent()) {
                Owner upd = update.get();
                if(upd.getPartyHallIds() == null){
                    upd.setPartyHallIds(new ArrayList<String>());
                }
                List<String> ids = upd.getPartyHallIds();
                ids.add(tempPartyHallId);
                upd.setPartyHallIds(ids);
                ownerRepository.save(upd);
            }

        return partyHallRepository.getByPartyHallName(partyHall.getPartyHallName()).get(0);
    }

    @Override
    public List<PartyHall> getAllPartyHalls() {
        return partyHallRepository.findAll();
    }

    @Override
    public Optional<PartyHall> getPartyHallById(String id){
        return partyHallRepository.findPartyHallByPartyHallId(id);
    }

    @Override
    public String deletePartyHall(String partyHallId, String ownerId) {
        Optional<Owner> res = ownerRepository.findById(ownerId);
        if(res.isPresent()) {
            Owner owner = res.get();
            List<String> partyHallList = owner.getPartyHallIds();
            partyHallList.remove(partyHallId);

            partyHallRepository.deleteById(partyHallId);
        }
        return "Party Hall Deleted";
    }

    @Override
    public List<PartyHall> getPartyHallsByOwner(String ownerId) {
        Optional<Owner> res = ownerRepository.findById(ownerId);
        List<PartyHall> ls = new ArrayList<>();
        if(res.isPresent()) {
            Owner owner = res.get();
            List<String> partyHallList = owner.getPartyHallIds();
            for(String e: partyHallList){
                if(e != null) {
                    Optional<PartyHall> partyHall = partyHallRepository.findById(e);
                    if (partyHall.isPresent()) {
                        PartyHall ph = partyHall.get();
                        ls.add(ph);
                    }
                }
            }
        }
        return ls;
    }

    @Override
    public PartyHall update(String id, AddPartyHallData partyHall) {
        Optional<PartyHall> tempPartyHall = partyHallRepository.findById(id);
        if(tempPartyHall.isPresent()){
            PartyHall tPartyHall = tempPartyHall.get();
            tPartyHall.setPartyHallName(partyHall.getPartyHallName());
            tPartyHall.setPrices(Double.valueOf(partyHall.getPrices()));
            tPartyHall.setCity(partyHall.getCity());
            tPartyHall.setPincode(partyHall.getPincode());
            tPartyHall.setStreet(partyHall.getStreet());
            tPartyHall.setState(partyHall.getState());
            tPartyHall.setCapacity(partyHall.getCapacity());



            Features ft = tPartyHall.getFeatures();
            ft.setHall(partyHall.isHall());
            ft.setLawn(partyHall.isLawn());
            ft.setVeg(partyHall.getVeg());
            ft.setGarden(partyHall.isGarden());
            ft.setNonVeg(partyHall.getNonVeg());
            ft.setPoolSide(partyHall.isPoolSide());
            ft.setConferenceRoom(partyHall.isConferenceRoom());
            tPartyHall.setFeatures(ft);

            partyHallRepository.save(tPartyHall);
        }
        return partyHallRepository.findById(id).get();
    }

    @Override
    public Optional<PartyHall> updateImages(String id, PartyHall partyHall, String image, String work) {
        Optional<PartyHall> tempPartyHall = partyHallRepository.findById(id);
        if(tempPartyHall.isPresent()){
            PartyHall tPartyHall = tempPartyHall.get();
            List<String> images = partyHall.getImages();
            if(work.equals("add"))
                images.add(image);
            else
                images.remove(image);
            tPartyHall.setImages(images);
            partyHallRepository.save(tPartyHall);
        }
        return partyHallRepository.findById(id);
    }



    @Override
    public List<PartyHall> filterData(String location, String date, Integer guests, Integer budget) {
        List<PartyHall> ls;
        List<PartyHall> filterByDate = new ArrayList<>();

        List<PartyHall> byLoc = partyHallRepository.findPartyHallByCity(location).get();
        List<PartyHall> byDate = partyHallRepository.findAll();
        for(PartyHall p : byDate){
            List<BookedDates> bd = p.getBookedDates();
            boolean flag = false;
            for(BookedDates b : bd){
                if(b.getDate() == date){
                    flag = true;
                }
            }
            if(!flag){
                filterByDate.add(p);
            }
        }
        List<PartyHall> byGuests = partyHallRepository.findPartyHallByCapacityLessThanEqual(guests).get();
        List<PartyHall> byBudget = partyHallRepository.findPartyHallByPrices(budget/guests).get();
        ls = concat(byLoc.stream(), filterByDate.stream()).distinct().collect(toList());
        ls = concat(ls.stream(), byGuests.stream()).distinct().collect(toList());
        ls = concat(ls.stream(), byBudget.stream()).distinct().collect(toList());

        return ls;
    }

    @Override
    public PartyHall addRating(Integer rating, String partyHallId, String userId) {
        PartyHall tempPartyHall = partyHallRepository.findById(partyHallId).get();
        tempPartyHall.setRatings((tempPartyHall.getRatings()+rating)/2);

        Reviews review = reviewsRepository.findByUserIdAndPartyHallId(userId, partyHallId).get(0);

        if(review == null){
            review = new Reviews();
            review.setUserId(userId);
            review.setPartyHallId(partyHallId);
        }
        review.setRating(rating);
        reviewsRepository.save(review);
        return tempPartyHall;
    }
}
