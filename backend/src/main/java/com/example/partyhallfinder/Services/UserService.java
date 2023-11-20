package com.example.partyhallfinder.Services;


import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.payload.UserDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface UserService {
    public UserDto addUser(SignupDetails user) throws Exception;
    public UserDto signIn(Credentials credentials) throws Exception;
    public UserDto update(String id, User user) throws Exception;
    public String delete(String id) throws  Exception;

    List<UserDto> getAll() throws Exception;

    String getViewingId(String userId);

    String updateViewingId(String userId, String id);

    UserDto getUser(String id);
}
