package com.revature.dao;

import com.revature.models.Reimburse;
import com.revature.utils.ConnectionSingleton;
import com.revature.services.ReimService;
import com.revature.controllers.ReimController;
import com.revature.models.User;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Set;

public class IReimDaoJDBC {

    private ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();

    public void createReimburseByUser(Reimburse r) {
       // public List<Reimburse> readReimburseByUser(int id)
        Connection c = cs.getConnection();
        try {
            c.setAutoCommit(false);


            String sql = "call create_reimburseu(?,?,?,?,?,)";
            CallableStatement call = c.prepareCall(sql);

            call.setInt(1, r.getAmount());
            call.setDate(2, r.getSubmission());
            call.setString(3, r.getDescription());
            call.setInt(4,r.getAuthor().getUserId());
            call.setInt(5, r.getType());

            call.execute();

            c.setAutoCommit(true);
        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
}
