package com.example.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Ratings")
public class Rating {
    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long Id;
    @Column(name = "comment")
    private String comment;
    @Column(name = "stars")
    private int stars;
    @Column(name = "fk_Employeeid")
    private Long fk_Employeeid;

    public Rating() {}

    public Rating(String comment, int stars, Long fk_Employeeid) {
        this.comment = comment;
        this.stars = stars;
        this.fk_Employeeid = fk_Employeeid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating = (Rating) o;
        return Objects.equals(Id, rating.Id) &&
                Objects.equals(comment, rating.comment) &&
                Objects.equals(stars, rating.stars);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, comment, stars);
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public Long getFk_Employeeid() {
        return fk_Employeeid;
    }

    public void setFk_Employeeid(Long fk_Employeeid) {
        this.fk_Employeeid = fk_Employeeid;
    }

    @Override
    public String toString() {
        return "com.example.entity.Rating{" +
                "id=" + Id +
                ", comment='" + comment + '\'' +
                ", stars='" + stars + '\'' + '}';
    }
}
