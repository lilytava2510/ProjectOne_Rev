package com.revature.services;

import com.revature.dao.IUserDao;
import com.revature.models.User;
public class UserService {

    private IUserDao ud;


    public UserService(IUserDao ud) {
        this.ud = ud;

    }

    public void registerUser(String first, String last, String username, String email, String password) {
        User register = new User(0, first, last, username, email, password);
        ud.createUser(register);
    }

//    public User loginUser(String email, String password) {
//
//        User u = ud.readUserByEmail(email);
//
//        if (u != null) {
//            if (password.equals(u.getPassword())) {
//
//                return u;
//            } else {
//
//                return null;
//            }
//        }
//
//
//        return null;
//    }
}
