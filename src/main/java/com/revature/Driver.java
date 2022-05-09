package com.revature;

import com.revature.utils.ConnectionSingleton;

import java.sql.Connection;

public class Driver {

public static void main(String[] args ) {
    Connection c = ConnectionSingleton.getConnectionSingleton().getConnection();
}

}
