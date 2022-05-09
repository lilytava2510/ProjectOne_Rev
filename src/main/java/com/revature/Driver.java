package com.revature;

import com.revature.controllers.UserController;
import com.revature.dao.IUserDao;
import com.revature.dao.UserDaoJDBC;
import com.revature.services.UserService;
import com.revature.utils.ConnectionSingleton;
import io.javalin.Javalin;

import java.sql.Connection;

import static io.javalin.apibuilder.ApiBuilder.*;
import static io.javalin.apibuilder.ApiBuilder.delete;

public class Driver {

public static void main(String[] args ) {
    Connection c = ConnectionSingleton.getConnectionSingleton().getConnection();
    IUserDao ud = new UserDaoJDBC();
    //TransactionService ps = new TransactionService();
    UserService us = new UserService(ud);
    UserController uc = new UserController(us);

    Javalin server = Javalin.create(config ->
    {
        config.enableCorsForAllOrigins();
    });
    us.registerUser("bob", "guy", "job", "@job", "pass");
//    server.routes(()-> {
//        path("users", () -> {
//            post("/register", uc.handleRegister);
//            post("/login", uc.handleLogin);
            //put("/", uc.handleUpdateUser);
            //delete("/{id}", uc.handleDeleteUser);
            //   get("/follow/{id}", uc.handleFollowUser);
            //   get("/full", uc.handleFullUserObject);
        //});

//        server.start(8080);

    //});

}


}

