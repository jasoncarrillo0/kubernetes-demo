package com.example.springboot.ConsistentController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ConsistentController {

	@GetMapping("/consistent")
	public String index() {
        System.out.println("hit consistent...");
		return null;
	}
}

