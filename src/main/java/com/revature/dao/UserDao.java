package com.revature.dao;

import com.revature.utils.ConnectionSingleton;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

public class UserDao {
    private ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();

    public void createUser(String user, String pass, String first, String last, String email, int id){
        Connection c = cs.getConnection();
        String sql = "call create_user(?,?,?,?,?,?)";
        try{
            c.setAutoCommit(false);
            CallableStatement call = c.prepareCall(sql);
            call.setString(1, user);
            call.setString(2, pass);
            call.setString(3, first);
            call.setString(4, last);
            call.setString(5, email);
            call.setInt(6, id);
            call.execute();
            c.setAutoCommit(true);
        }catch(SQLException e){e.printStackTrace();}
    }
}
