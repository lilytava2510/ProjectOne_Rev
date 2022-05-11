package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.ReimObject;
import com.revature.models.Reimburse;
import com.revature.models.User;
import com.revature.services.ReimService;
import io.javalin.http.Handler;


public class ReimController {


private ReimService rs;
private ObjectMapper om;

public ReimController(ReimService rs){
this.rs =rs;
this.om = new ObjectMapper();

}


    public Handler handleCreateReim = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must log in to request a reimbursement");
        } else {
            int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));

            User u = new User();


            ReimObject r = om.readValue(ctx.body(), ReimObject.class);
            u.setUserId(r.author);
            rs.addReimburse(r.amount, r.submission,r.description,u,r.type);
        }

    };








   // Handler handleView

    // how to get the reimburse view it

    //Handler handlePending

    // HAndler handleViewAll

    // Handlehandleapproved




}
