package com.example.springboot.MediumLoadController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin

public class MediumLoadController {
	@PostMapping("/mediumload")
	public HashMap<String, String> index() {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("message", "MEDIUM");
		return map;
	}
}