package com.revature;

import com.revature.controllers.ReimController;
import com.revature.controllers.UserController;
import com.revature.dao.IUserDao;
import com.revature.dao.UserDaoJDBC;
import com.revature.services.ReimService;
import com.revature.services.UserService;
import com.revature.utils.ConnectionSingleton;
import io.javalin.Javalin;
import com.revature.dao.IReimDaoJDBC;
import java.sql.Connection;

import static io.javalin.apibuilder.ApiBuilder.*;
import static io.javalin.apibuilder.ApiBuilder.delete;

public class Driver {

public static void main(String[] args ) {
    Connection c = ConnectionSingleton.getConnectionSingleton().getConnection();
    IUserDao ud = new UserDaoJDBC();
    IReimDaoJDBC rd = new IReimDaoJDBC();
    //TransactionService ps = new TransactionService();
    UserService us = new UserService(ud,rd);
    UserController uc = new UserController(us);
    ReimService rs = new ReimService(rd);
    ReimController rc = new ReimController(rs);
   // us.registerUser("charly", "charles", "tt", "@gmail", "passwprd");
    Javalin server = Javalin.create(config ->
    {
        config.enableCorsForAllOrigins();
    });

    server.routes(()-> {
        path("users", () -> {
            post("/register", uc.handleRegister);
            post("/login", uc.handleLogin);
            put("/", uc.handleUpdateUser);
            delete("/{id}", uc.handleDeleteUser);
        });
        path("reimburse", ()-> {
            post("/",rc.handleCreateReim);
        });






        server.start(8080);

    });

}}


// get("/logout", uc.handlelogout); {

