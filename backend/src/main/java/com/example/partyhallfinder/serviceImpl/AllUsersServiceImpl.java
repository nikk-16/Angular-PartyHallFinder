package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.AllUsers;
import com.example.partyhallfinder.Repositories.AllUsersRepository;
import com.example.partyhallfinder.Services.AllUsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AllUsersServiceImpl implements AllUsersService {
    private final AllUsersRepository allUsersRepository;

    @Override
    public AllUsers signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException {
        String tempPassword = credentials.getPassword();
        String tempEmail = credentials.getEmail();

        AllUsers userObj=null;
        if(tempEmail!=null && tempPassword!=null) {
            System.out.println(tempPassword +" "+ tempEmail);
            userObj = allUsersRepository.findAllUsersByEmail(tempEmail);
            if(userObj==null) {
                throw new NotFoundException("doesn't Exists");
            }
            else if(!userObj.getPassword().equals(tempPassword)){
                throw new InvalidCredentialsException("Invalid password");
            }
        }
        return userObj;
    }

    @Override
    public AllUsers addUser(AllUsers user) throws Exception {
        String tempEmailId = user.getEmail();
        if(tempEmailId != null && !"".equals(tempEmailId)) {
            AllUsers userObj = allUsersRepository.findAllUsersByEmail(tempEmailId);
            if(userObj != null) {
                System.out.println("hello hello");
                throw new Exception("User with "+tempEmailId+" is already exist");
            }
            else{
                if(user.getRole().equals("admin")){

                }
                else if(user.getRole().equals("owner")){

                }
                else if(user.getRole().equals("user")){

                }
                allUsersRepository.save(user);
            }
        }
        return user;
    }
}
