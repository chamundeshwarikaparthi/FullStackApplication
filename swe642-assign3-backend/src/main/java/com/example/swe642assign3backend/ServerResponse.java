// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the server response model class
package com.example.swe642assign3backend;

public class ServerResponse {
    private String message;

    public ServerResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
