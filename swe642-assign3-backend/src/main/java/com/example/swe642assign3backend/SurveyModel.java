// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the model class where the table schema is defined for the survey table
package com.example.swe642assign3backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "surveytable")
public class SurveyModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="firstname")
    private String firstname;
    @Column(name="lastname")
    private String lastname;
    @Column(name="streetaddress")
    private String streetaddress;
    @Column(name="city")
    private String city;
    @Column(name="state")
    private String state;
    @Column(name="zipcode")
    private String zipcode;
    @Column(name="telephone")
    private String telephone;
    @Column(name="email")
    private String email;
    @Column(name="dateofsurvey")
    private String dateofsurvey;
    @Column(name="likedmost")
    private String likedmost;
    @Column(name="interestedby")
    private String interestedby;
    @Column(name="likelihood")
    private String likelihood;
    @Column(name="comments")
    private String comments;

    // Default constructor (required by JPA)
    public SurveyModel() {
    }

    // Getters and setters for all fields
    // You can generate these using your IDE or write them manually

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getStreetaddress() {
        return streetaddress;
    }

    public void setStreetaddress(String streetaddress) {
        this.streetaddress = streetaddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDateofsurvey() {
        return dateofsurvey;
    }

    public void setDateofsurvey(String dateofsurvey) {
        this.dateofsurvey = dateofsurvey;
    }

    public String getLikedmost() {
        return likedmost;
    }

    public void setLikedmost(String likedmost) {
        this.likedmost = likedmost;
    }

    public String getInterestedby() {
        return interestedby;
    }

    public void setInterestedby(String interestedby) {
        this.interestedby = interestedby;
    }

    public String getLikelihood() {
        return likelihood;
    }

    public void setLikelihood(String likelihood) {
        this.likelihood = likelihood;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}