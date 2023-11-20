package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Capacity {
    private boolean isThere;
    private Integer maxCapacity;
    private Integer seating;
}
