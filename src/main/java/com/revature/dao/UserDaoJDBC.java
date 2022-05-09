package com.revature.dao;

import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class UserDaoJDBC implements IUserDao {

    ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();
    @Override
    public void createUser(User user){
        Connection c = cs.getConnection();
        String sql = "call create_user(?,?,?,?,?,?)";
        int x = 0;
        try{
            if(user.isPrivilege()){ x=1;}else{x=2;}
            c.setAutoCommit(false);
            CallableStatement call = c.prepareCall(sql);
            call.setString(1, user.getUsername());
            call.setString(2, user.getPassword());
            call.setString(3, user.getFirstName());
            call.setString(4, user.getLastName());
            call.setString(5, user.getEmail());
            call.setInt(6, x);
            call.execute();
            c.setAutoCommit(true);
        }catch(SQLException e){e.printStackTrace();}
    }
//    public void createUser(User u) {
//
//        Connection c = cs.getConnection();
//
//        String sql = "insert into users (firstname, lastname, username, email, password) values " +
//                "('" + u.getFirstName() +"','" + u.getLastName() + "','" + u.getUsername() + "','" + u.getEmail() +"','" + u.getPassword() + "')";
//
//        try {
//            Statement s = c.createStatement();
//            s.execute(sql);
//        } catch (SQLException e) {
//            throw new RuntimeException(e);
//        }

    }




