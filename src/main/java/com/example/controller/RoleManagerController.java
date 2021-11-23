package com.example.controller;

import com.example.config.RoleManagerForm;
import com.example.service.JwtUserDetailsService;
import com.example.service.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
public class RoleManagerController {

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @GetMapping("/rolemanager")
    public String showForm(Model model){
        model.addAttribute("roleManagerForm", new RoleManagerForm());
        return "rolemanager";
    }

    /*
    @PostMapping("/rolemanager")
    public String checkFormInfo(@Valid @ModelAttribute RoleManagerForm roleManagerForm, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            return "rolemanager";
        }

        model.addAttribute("roleManagerForm", roleManagerForm);

        return "roleresults";
    }

     */

    @RequestMapping(value = "/rolemanager", method = RequestMethod.POST)
    public String update(@Valid @ModelAttribute @RequestBody RoleManagerForm roleManagerForm, BindingResult bindingResult, Model model) throws Exception {
        if (bindingResult.hasErrors()) {
            return "rolemanager";
        }

        try {
            userDetailsService.updateRole(roleManagerForm.getUsername(), roleManagerForm.getRole());
        } catch (Exception e) {
            throw new Exception("CANT_UPDATE", e);
        }
        model.addAttribute("roleManagerForm", roleManagerForm);

        return "roleresults";
    }
}
