package com.example.partyhallfinder.Exception;


import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.ControllerAdvice;


public class NotFoundException extends Exception {
    public NotFoundException(){
        super();
    }

    public NotFoundException(String message) {
        super(message);
    }
}
