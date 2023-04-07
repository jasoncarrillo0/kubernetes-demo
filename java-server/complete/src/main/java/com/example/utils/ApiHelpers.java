package com.example.utils;

import java.util.concurrent.ThreadLocalRandom;

public class ApiHelpers {
    
    public static String GO_SERVER_IP = "GO_SERVER_IP";


    public static String getFirstName() {
        String[] names = {"jason", "hannah", "john", "jordan", "jill", "jimmy"};
        int randomNum = ThreadLocalRandom.current().nextInt(0, names.length);
        return names[randomNum];

    }

    public static String getLastName() {
        String[] names = {"johnson", "smith", "williams", "mallard", "bronson", "herber"};
        int randomNum = ThreadLocalRandom.current().nextInt(0, names.length);
        return names[randomNum];
    }

    public static int getAge() {
        return ThreadLocalRandom.current().nextInt(0, 100);
    }
}
