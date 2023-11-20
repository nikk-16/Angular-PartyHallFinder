package com.example.partyhallfinder.Models;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "messages")
public class Message {
    @Id
    private String messageId;
    private String sendorId;
    private String recieverId;
    private String text;
}
