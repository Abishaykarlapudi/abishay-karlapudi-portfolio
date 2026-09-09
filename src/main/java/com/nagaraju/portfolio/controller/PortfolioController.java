package com.nagaraju.portfolio.controller;

import com.nagaraju.portfolio.model.ContactMessage;
import com.nagaraju.portfolio.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class PortfolioController {
    private final ContactMessageRepository repository;
    public PortfolioController(ContactMessageRepository repository) { this.repository = repository; }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("contactMessage", new ContactMessage());
        return "index";
    }

    @PostMapping("/contact")
    public String contact(@Valid @ModelAttribute("contactMessage") ContactMessage message,
                          BindingResult result, Model model) {
        if (result.hasErrors()) return "index";
        repository.save(message);
        model.addAttribute("success", true);
        model.addAttribute("contactMessage", new ContactMessage());
        return "index";
    }
}
