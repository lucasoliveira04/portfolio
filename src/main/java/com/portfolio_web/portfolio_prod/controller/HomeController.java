package com.portfolio_web.portfolio_prod.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "home";
    }

    @GetMapping("/notFound")
    public String notFound() {
        return "not-found";
    }

    @GetMapping("/home")
    public String home(Model model, HttpSession session) {
        addTheme(model, session);
        return "home-page";
    }

    private void addTheme(Model model, HttpSession session) {
        String theme = (String) session.getAttribute("theme");

        if (theme == null) theme = "dark";
        model.addAttribute("theme", theme);
    }


}
