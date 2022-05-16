package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.RegisterObject;
import com.revature.models.ReimObject;
import com.revature.models.Reimburse;
import com.revature.models.User;
import com.revature.services.ReimService;
import io.javalin.http.Handler;


public class ReimController {


    private ReimService rs;
    private ObjectMapper om;

    public ReimController(ReimService rs) {
        this.rs = rs;
        this.om = new ObjectMapper();
    }

    public Handler handleCreateReim = (ctx) -> {
       if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must log in to request a reimbursement");
        } else {
            int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
            //User u = new User();
            ReimObject r = om.readValue(ctx.body(), ReimObject.class);
            //u.setUserId(r.author);
            rs.addReimburse(r.amount, r.description, reimburserId, r.type);
        }

    };
    public Handler handleViewTickets = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(402);
            ctx.result("Please log in to view tickets.");
        } else {
            int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
        //RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);

            ctx.result(om.writeValueAsString(rs.readReimburse(reimburserId)));
        }

    };
    public Handler handleUpdateReim = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(409);
            ctx.result("Please log in to view alter tickets.");
        } else {
            int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
            ReimObject ro = om.readValue(ctx.body(), ReimObject.class);
            ctx.result(om.writeValueAsString(rs.updateReim(ro.id, reimburserId, ro.status)));
        }
    };


    public Handler handleUserApprove = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(403);
            ctx.result("Please log in to view approved tickets.");
        } else {
            int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
        //RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);
            ctx.result(om.writeValueAsString(rs.getApprovedId(reimburserId)));


        }
    };


    public Handler handleUserPend = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(404);
            ctx.result("Log in in order to view the status of your tickets.");
        } else {
        int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
        //RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);

            ctx.result(om.writeValueAsString(rs.getPendingId(reimburserId)));
        }

    };

    public Handler handleGetAllAprrove = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(405);
            ctx.result("Log in in order to change the status of user tickets.");
        } else {

            ctx.result(om.writeValueAsString(rs.getAllApprove()));
        }


    };
    public Handler handlegetAllPend = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(406);
            ctx.result("Log in in order to change the status of user tickets.");
        } else {

            ctx.result(om.writeValueAsString(rs.getAllPend()));
        }


    };

}
//package com.revature.controllers;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.revature.models.ReimObject;
//import com.revature.services.ReimService;
//import io.javalin.http.Handler;
//
//public class ReimController {
//
//    private ReimService rs;
//    private ObjectMapper om;
//
//    public ReimController(ReimService rs){
//        this.rs =rs;
//        this.om = new ObjectMapper();
//
//    }
//
//
//    public Handler handleCreateReim = (ctx) -> {
//
//            if (ctx.req.getSession().getAttribute("id") == null) {
//                ctx.status(401);
//                ctx.result("You must log in to request a reimbursement");
//            } else {
//                int reimburserId = Integer.parseInt((String) ctx.req.getSession().getAttribute("id"));
//
//
//
//                ReimObject r = om.readValue(ctx.body(), ReimObject.class);
//                rs.addReimburse(r.amount, r.description, r.author, r.type);
//            }
//    };
//
//
//
//
//
//   }