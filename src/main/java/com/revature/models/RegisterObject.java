package com.revature.models;

public class RegisterObject {

    public String first;
    public String last;
    public String email;
    public String username;
    public String password;



    @Override
    public String toString() {
        return "RegisterObject{" +
                "first='" + first + '\'' +
                ", last='" + last + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}