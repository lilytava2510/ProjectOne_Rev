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
    public void registerUser(String first, String last, String user, String email, String pass, boolean trust){
        User register = new User(user, pass, first, last, email, trust);
        ud.createUser(register);
    }


    public User loginUser(String email, String password) {

        User u = ud.loginUser(email,password);


                return u;
            }


  //  public User logout(String email, String password) {

      //  User u = ud.loginUser(email,password);


     //   return u;
  //  }


    public User updateUserInfo(User u) {
        return ud.updateUser(u);
    }

    public void deleteUser(User u) {
        ud.deleteUser(u);
    }
}

