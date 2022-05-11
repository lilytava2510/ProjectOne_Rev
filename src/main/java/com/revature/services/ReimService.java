package com.revature.services;


import java.sql.Date;
import java.time.Instant;

import com.revature.dao.IReimDaoJDBC;
import com.revature.models.User;
import com.revature.models.Reimburse;

public class ReimService {
     private IReimDaoJDBC rd;

     public ReimService(IReimDaoJDBC rd){
          this.rd=rd;

}

public void addReimburse(int amount, Date submission, String description, User author, int type){

     Date d = new Date(Instant.now().toEpochMilli());

     Reimburse r = new Reimburse(amount,submission,description,0,0);
     rd.createReimburseByUser(r);
     }
}


       //Reimburse r = new Reimburse(0,d