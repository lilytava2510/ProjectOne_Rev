package com.revature.dao;

import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.*;
import java.util.List;

public  class UserDaoJDBC implements IUserDao {

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

    @Override
    public List<User> readAllUsers() {
        return null;
    }

    @Override
    public User readUserByEmail(String email) {
        return null;
    }

    public User getUserById(int id){
        Connection c = cs.getConnection();
        String sql = "select * from users where user_id = ?";
        User user = new User();
        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setInt(1, id);
            ResultSet rs = p.executeQuery();
            while(rs.next()){
                user.setUserId(rs.getInt(1));
                user.setUsername(rs.getString(2));
                user.setPassword(rs.getString(3));
                user.setFirstName(rs.getString(4));
                user.setLastName(rs.getString(5));
                user.setEmail(rs.getString(6));
                if(rs.getBoolean(7)){
                    user.setPrivilege(true);
                }else{user.setPrivilege(false);}
            }
        }catch(SQLException e){e.printStackTrace();}
        return user;
    }

    public User updateUser(User user){
        Connection c = cs.getConnection();
        String sql = "update users set username = ?, password = ?, first_name = ?, last_name = ?, email = ?, role_ = ?, where user_id = ?";
        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setString(1, user.getUsername());
            p.setString(2, user.getPassword());
            p.setString(3, user.getFirstName());
            p.setString(4, user.getLastName());
            p.setString(5, user.getEmail());
            p.setBoolean(6, user.isPrivilege());
            p.setInt(7, user.getUserId());
            p.execute();
        }catch(SQLException e){e.printStackTrace();}

        return user;
    }

    @Override
    public void deleteUser(User u) {

    }

    @Override
    public User loginUser(String users, String password) {
        return null;
    }

    public void deleteUser(int id){
        Connection c = cs.getConnection();
        String sql = "delete from users where user_id = ?";
        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setInt(1, id);
            p.execute();
        }catch(SQLException e){e.printStackTrace();}
    }

    public User login(String users, String password){
        Connection c = cs.getConnection();
        String sql = "select * from users where username = ? and password = ?";
        User user = new User();
        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setString(1, users);
            p.setString(2, password);
            ResultSet rs = p.executeQuery();
            while(rs.next()){
                user.setUserId(rs.getInt(1));
                user.setUsername(rs.getString(2));
                user.setPassword(rs.getString(3));
                user.setFirstName(rs.getString(4));
                user.setLastName(rs.getString(5));
                user.setEmail(rs.getString(6));
                if(rs.getBoolean(7)){
                    user.setPrivilege(true);
                }else{user.setPrivilege(false);}
            }
        }catch(SQLException e){e.printStackTrace();}
        return user;
    }

}












