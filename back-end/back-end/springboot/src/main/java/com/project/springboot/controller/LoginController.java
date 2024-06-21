package com.project.springboot.controller;

import ch.qos.logback.core.model.Model;
import com.project.springboot.model.User;
import com.project.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class LoginController {


    @Autowired
    private UserRepository userRepository;

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addText("error");
        return "login";
    }

    @PostMapping("/login")
    public int login(@RequestParam String username, @RequestParam String password, Model model) {
        User user = userRepository.findByuserName(username);

        if (user != null && user.getPassword().equals(password)) {
            return 1; // Redirect to the home page
        } else {
            model.addText("error");
            return 0;
        }
    }
}
