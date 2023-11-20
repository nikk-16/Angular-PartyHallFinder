package com.example.partyhallfinder.Services;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Admin;

public interface AdminService {
    Admin addAdmin(SignupDetails admin) throws Exception;
    Admin signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException;

    Admin getAdminById(String id);
}
