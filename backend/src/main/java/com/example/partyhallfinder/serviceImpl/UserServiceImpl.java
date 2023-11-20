package com.example.partyhallfinder.serviceImpl;

import com.example.partyhallfinder.Components.Credentials;
import com.example.partyhallfinder.Components.SignupDetails;
import com.example.partyhallfinder.Exception.InvalidCredentialsException;
import com.example.partyhallfinder.Exception.NotFoundException;
import com.example.partyhallfinder.Models.Owner;
import com.example.partyhallfinder.Models.User;
import com.example.partyhallfinder.Repositories.UserRepository;
import com.example.partyhallfinder.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public User addUser(SignupDetails user) throws Exception {
        String tempEmailId = user.getEmail();
        if(tempEmailId != null && !"".equals(tempEmailId)) {
            Optional<User> userObj = userRepository.findByEmail(tempEmailId);
            if(userObj.isPresent()) {
                System.out.println(userObj);
                throw new Exception("User with "+tempEmailId+" is already exist");
            }
            else{
                User newUser = new User();
                newUser.setImg(user.getImg());
                newUser.setEmail(user.getEmail());
                newUser.setDob(user.getDob());
                newUser.setPassword(user.getPassword());
                newUser.setPhone(user.getPhone());
                newUser.setLastName(user.getLastName());
                newUser.setFirstName(user.getFirstName());
                newUser.setSearches(new ArrayList<String>());
                newUser.setBookedPartyHallIds(new ArrayList<String>());
                newUser.setViewingId("");
                userRepository.save(newUser);
            }
        }
        return userRepository.findByEmail(user.getEmail()).get();
    }

    @Override
    public User signIn(Credentials credentials) throws NotFoundException, InvalidCredentialsException {
        String tempPassword = credentials.getPassword();
        String tempEmail = credentials.getEmail();

        User userObj=null;
        if(tempEmail!=null && tempPassword!=null) {
            System.out.println(tempPassword +" "+ tempEmail);
            userObj = userRepository.findUserByEmail(tempEmail);
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
    public Optional<User> update(String id, User user) throws Exception {
        Optional<User> tempUser = userRepository.findById(id);
        if(tempUser.isPresent()){
            User tUser = tempUser.get();
            //for updating DOB
            String pattern = "dd-MM-yyyy";
            String newDob = new SimpleDateFormat(pattern).format(user.getDob());
            tUser.setDob(newDob);

            tUser.setFirstName(user.getFirstName());
            tUser.setLastName(user.getLastName());
            tUser.setPhone(user.getPhone());
            tUser.setPassword(user.getPassword());
            tUser.setImg(user.getImg());
            userRepository.save(tUser);
        }
        return userRepository.findById(id);
    }

    @Override
    public String delete(String id) throws Exception {
        userRepository.deleteById(id);
        return "Deleted Successfully";
    }

    @Override
    public List<User> getAll() throws Exception {
        return userRepository.findAll();
    }

    @Override
    public String getViewingId(String userId) {
        return userRepository.findById(userId).get().getViewingId();
    }

    @Override
    public String updateViewingId(String userId, String id) {
        User user = userRepository.findById(userId).get();
        System.out.println(user);
        user.setViewingId(id);
        userRepository.save(user);
        return "added";
    }

    @Override
    public User getUser(String id) {
        return userRepository.findById(id).get();
    }
}
