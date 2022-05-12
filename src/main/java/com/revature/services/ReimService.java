package com.revature.services;


import java.sql.Date;
import java.time.Instant;
import com.revature.dao.IReimDaoJDBC;
import com.revature.models.Reimburse;

public class ReimService {

     private IReimDaoJDBC rd;

    public ReimService(IReimDaoJDBC rd){
        this.rd=rd;}

    public void addReimburse(double amount, String description, int author, int type){

        Date d = new Date(Instant.now().toEpochMilli());

        Reimburse r = new Reimburse( amount, d, description, author, 1, type);
        r.setManager(1);
        rd.createTicket(r);
    }


}