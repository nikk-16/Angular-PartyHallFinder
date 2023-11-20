package com.example.partyhallfinder.Exception;


import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.reactive.result.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public String handleUserNotFoundException(NotFoundException ex) {
        return ex.getMessage();
    }

    @ExceptionHandler(AlreadyExistsException.class)
    public String handleUserNotFoundException(AlreadyExistsException ex) {
        return ex.getMessage();
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public String handleInvalidCredentialsException(InvalidCredentialsException ex) { return ex.getMessage(); }
}