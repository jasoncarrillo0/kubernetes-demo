package com.example.springboot.LargeLoadController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.utils.ApiHelpers;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@CrossOrigin

public class LargeLoadController {

    @Autowired
    private Environment environment;

	@PostMapping("/largeload")
	public String index() {
        try {
            final String uri            = environment.getProperty(ApiHelpers.GO_SERVER_IP)+ "/largeload";
            System.out.println("attempting to hit uri: " + uri);

            RestTemplate restTemplate   = new RestTemplate();
            String name                 = ApiHelpers.getFirstName();
            String lastName             = ApiHelpers.getLastName();
            int age                     = ApiHelpers.getAge();
            LargeLoadPerson person      = new LargeLoadPerson(name, lastName, age);
            ObjectMapper mapper         = new ObjectMapper();
            String jsonstr              = mapper.writeValueAsString(person);
            ResponseEntity<String> result = restTemplate.postForEntity(uri, jsonstr, String.class);
            return jsonstr;
        } catch (Exception e) {
            // TODO: handle exception
            return e.getMessage();
        }
	}
}