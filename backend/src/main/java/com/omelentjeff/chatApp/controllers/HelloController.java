package com.omelentjeff.chatApp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/hello")
public class HelloController {

    @GetMapping()
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from the backend");
    }
}
