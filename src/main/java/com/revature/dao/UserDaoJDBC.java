package com.revature.dao;

import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class UserDaoJDBC implements IUserDao {

    ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();
    @Override
    public void createUser(User u) {

        Connection c = cs.getConnection();

        String sql = "insert into users (firstname, lastname, username, email, password) values " +
                "('" + u.getFirstName() +"','" + u.getLastName() + "','" + u.getUsername() + "','" + u.getEmail() +"','" + u.getPassword() + "')";

        try {
            Statement s = c.createStatement();
            s.execute(sql);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }


}

