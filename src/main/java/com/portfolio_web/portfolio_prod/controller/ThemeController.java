package com.portfolio_web.portfolio_prod.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ThemeController {

    @GetMapping("/theme/toggle")
    public String toggleTheme(HttpSession session) {
        String currentTheme = (String) session.getAttribute("theme");

        if ("light".equals(currentTheme)) session.setAttribute("theme", "dark");
        else session.setAttribute("theme", "light");

        return "redirect:/home";
    }
}
