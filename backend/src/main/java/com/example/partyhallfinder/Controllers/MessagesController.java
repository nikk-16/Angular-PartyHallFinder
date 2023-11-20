package com.example.partyhallfinder.Controllers;


import com.example.partyhallfinder.Models.Message;
import com.example.partyhallfinder.Repositories.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("message")
@RequiredArgsConstructor

public class MessagesController {
    private final MessageRepository messageRepository;

//    @PostMapping("/postMessage")
//    public ResponseEntity<Message> sendMessage(@RequestBody  Message message){
//        return ResponseEntity.ok();
//    }
//
//    @GetMapping("/getMessage/{")
//    public ResponseEntity<Message> getMessage(@PathVariable)
//
}
