package com.revature;

import com.revature.controllers.UserController;
import com.revature.dao.IReimDaoJDBC;
import com.revature.dao.UserDaoJDBC;
import com.revature.models.Reimburse;
import com.revature.models.User;
import com.revature.services.UserService;
import com.revature.utils.ConnectionSingleton;

import java.sql.Connection;
import java.sql.Date;

import static io.javalin.apibuilder.ApiBuilder.delete;

public class Driver {

    public static void main(String[] args ) {
        Connection c = ConnectionSingleton.getConnectionSingleton().getConnection();
        UserDaoJDBC ud = new UserDaoJDBC();
        IReimDaoJDBC rd = new IReimDaoJDBC();
        UserService us = new UserService(ud);
        UserController uc = new UserController(us);
        Date d = new Date(2020-01-01);
        User use = new User(1);
        //User use1 = new User(1);
        Reimburse r = new Reimburse(0, 1.0, null, null, "stuff", 1, 1, 1, 1);
        rd.createTicket(r);

//        Javalin server = Javalin.create(config ->
//        {
//            config.enableCorsForAllOrigins();
//        });

//        server.routes(()-> {
//            path("users", () -> {
                //post("/register", uc.handleRegister);
                //post("/login", uc.handleLogin);
                //put("/", uc.handleUpdateUser);
                //delete("/{id}", uc.handleDeleteUser);
                //   get("/follow/{id}", uc.handleFollowUser);
                //   get("/full", uc.handleFullUserObject);
//            });
//        path("users", () -> {
//            post("/register", uc.handleRegister);
//            post("/login", uc.handleLogin);
//            put("/", uc.handleUpdateUser);
//            // get("/logout", uc.handlelogout); {
//
//
//
//
//
//            //put("/", uc.handleUpdateUser);
//            //delete("/{id}", uc.handleDeleteUser);
//            delete("/{id}", uc.handleDeleteUser);
//            //   get("/follow/{id}", uc.handleFollowUser);
//            //   get("/full", uc.handleFullUserObject);
//        });
//            server.start(8080);

//        });

    }
}