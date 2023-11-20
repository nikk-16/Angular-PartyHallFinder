package com.example.partyhallfinder.Components;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Price {
    private boolean isThere;
    private Integer amount;
}
