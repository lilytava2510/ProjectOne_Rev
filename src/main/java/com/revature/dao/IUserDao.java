package com.revature.dao;

import com.revature.models.User;

import java.util.List;
import java.util.Set;

public interface IUserDao {

    //Start out with the most basic crud


    public void createUser(User u);


    public List<User> readAllUsers();


    public User readUserByEmail(String email);


    public User updateUser(User u);


    public void deleteUser(User u);

    User loginUser(String users, String password);
}
