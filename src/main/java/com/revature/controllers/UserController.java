package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.LoginObject;
import com.revature.models.RegisterObject;
import com.revature.models.User;
import com.revature.services.UserService;
import io.javalin.http.Handler;

public class UserController {

    private UserService us;

    private ObjectMapper om;

    public UserController(UserService us) {
        this.us = us;
        this.om = new ObjectMapper();
    }


    public Handler handleRegister = (ctx) -> {
        RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);

        System.out.println(ro);


        us.registerUser(ro.first, ro.last, ro.username, ro.email, ro.password);

        ctx.result("User was created");
    };

//    public Handler handleLogin = (ctx) -> {
//        LoginObject lo = om.readValue(ctx.body(), LoginObject.class);
//
//        User u = us.loginUser(lo.email, lo.password);
//
//        if(u == null){
//            ctx.status(403);
//            ctx.result("Username or password was incorrect");
//        } else {
//
//            ctx.req.getSession().setAttribute("loggedIn", ""+u.getEmail());
//            ctx.result(om.writeValueAsString(u));
//        }
//    };
//            ctx.result(om.writeValueAsString(us.updateUserInfo(u)));
//};
//
//public Handler handleDeleteUser = (ctx)-> {
//        int id = Integer.parseInt(ctx.pathParam("id"));
//        User u = new User();
}
