package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Admin;
import com.example.partyhallfinder.payload.AdminDto;

public interface AdminService {
    AdminDto addAdmin(SignupDetails admin) throws Exception;
    AdminDto signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException;

    AdminDto getAdminById(String id);
}
