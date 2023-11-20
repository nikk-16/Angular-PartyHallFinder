package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Features {
    private boolean hall ;
    private boolean conferenceRoom ;
    private boolean lawn ;
    private boolean poolSide;
    private boolean garden;
    private Integer veg ;
    private Integer nonVeg ;
}
