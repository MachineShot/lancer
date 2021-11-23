package com.example.config;

import javax.validation.constraints.NotNull;

public class RoleManagerForm {
    @NotNull
    private String username;

    @NotNull
    private String role;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "RoleManagerForm{" +
                "username='" + username + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
