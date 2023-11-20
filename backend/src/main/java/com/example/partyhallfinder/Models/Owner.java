package com.example.partyhallfinder.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Document(collection = "owners")
@Data
public class Owner {
    @Id
    private String id;
    private String lastName;
    private String firstName;
    private String email;
    private String img;
    private String dob;
    private String phone;
    private String password;
    private List<String> partyHallIds;
//    private Booking booking;

//    public Date getDob() {
//        return dob;
//    }
//
//    public void setDob(String dob) throws ParseException {
//        dob = dob.charAt(0)+Character.toString(((int)dob.charAt(1))+1)+dob.substring(2);
//        System.out.println(dob);
//        DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
//        Date date = formatter.parse(dob);
//        this.dob = date;
//    }
}
