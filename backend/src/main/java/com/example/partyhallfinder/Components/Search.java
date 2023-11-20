package com.example.partyhallfinder.Components;


import lombok.Data;

import java.util.Date;
import java.util.List;

//@Document(collection = "search")
@Data
public class Search {
    private Date dateStart;
    private Date dateEnd;
    private Location location;
    private Integer capacity;
    private double budget;
    private List<String> amenities;
}
