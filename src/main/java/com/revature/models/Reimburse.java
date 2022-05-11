package com.revature.models;

import java.sql.Date;

public class Reimburse {

  private int reimburse_id;

  private int amount;
  private Date submission;
  private Date resolution;
  private String description;
  private User author;
  private User manager;
  private int status;
  private int type;


  public Reimburse(int amount, Date submission, String description, int i, int i1) {

  }

public Reimburse( int amount, Date submission, Date resolution, String description, User author, int type) {
 this.amount=amount;
  this.submission = submission;
  this.description =description;
  this.author=author;
  this.type=type;
}

  public Reimburse(int reimburse_id, int amount, Date submission, Date resolution, String description, User author, User manager, int status, int type) {
    this.amount=amount;
    this.reimburse_id = reimburse_id;
    this.submission = submission;
    this.description =description;
    this.author=author;
    this.manager=manager;
    this.status=status;
    this.type=type;
    this.resolution=resolution;
  }


  public int getReimburse_id() {
    return reimburse_id;
  }

  public void setReimburse_id(int reimburse_id) {
    this.reimburse_id = reimburse_id;
  }

  public int getAmount() {
    return amount;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public Date getSubmission() {
    return submission;
  }

  public void setSubmission(Date submission) {
    this.submission = submission;
  }

  public Date getResolution() {
    return resolution;
  }

  public void setResolution(Date resolution) {
    this.resolution = resolution;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public User getAuthor() {
    return author;
  }

  public void setAuthor(User author) {
    this.author = author;
  }

  public User getManager() {
    return manager;
  }

  public void setManager(User manager) {
    this.manager = manager;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public int getType() {
    return type;
  }

  public void setType(int type) {
    this.type = type;
  }
}
