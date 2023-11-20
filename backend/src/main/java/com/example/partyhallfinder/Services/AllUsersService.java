package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.AllUsers;

public interface AllUsersService {
    public AllUsers signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException;

    AllUsers addUser(AllUsers user) throws Exception;
}
