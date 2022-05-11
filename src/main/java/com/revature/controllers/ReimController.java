package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.ReimObject;
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



                ReimObject r = om.readValue(ctx.body(), ReimObject.class);
                rs.addReimburse(r.amount, r.description, r.author, r.type);
            }
    };
        // Handler handleView

        // how to get the reimburse view it

        //Handler handlePending

        // HAndler handleViewAll

        // Handlehandleapproved




    }