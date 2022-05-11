package com.revature.models;

public class User {

    private int userId;

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private String email;

    private boolean privilege = false;

    public User() {



    }
    public User(String username, String password, String firstName, String lastName, String email, boolean privilege) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.privilege = privilege;
    }

    public User(int userId, String password, String firstname, String lastname, String email){
        this.userId = userId;
        this.password = password;
        this.firstName = firstname;
        this.lastName=lastname;
        this.email=email;
    }
    public User( String password, String email){
            this.email = email;
            this.password = password;
    }
    public User(int userId, String username, String password, String firstname, String lastname, String email){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName=lastname;
        this.email=email;
    }

public int  getUserId(){
    return userId;
    }

    public void setUserId(int UserId){
        this.userId = userId;
    }

    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username=username;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public boolean isPrivilege() {
        return privilege;
    }
    public void setPrivilege(boolean privilege){
        this.privilege=privilege;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                "firstname='" + firstName + '\'' +
                ", lastname='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +


                '}';
    }
}



