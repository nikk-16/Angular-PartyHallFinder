package com.example.partyhallfinder.Services;


import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Models.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface UserService {
    public User addUser(SignupDetails user) throws Exception;
    public User signIn(Credentials credentials) throws Exception;
    public Optional<User> update(String id, User user) throws Exception;
    public String delete(String id) throws  Exception;

    List<User> getAll() throws Exception;

    String getViewingId(String userId);

    String updateViewingId(String userId, String id);

    User getUser(String id);
}
