package com.example.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Queries")
public class Query {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "published")
    private boolean published;

    @Column(name = "fk_Employeeid")
    private Long fk_Employeeid;

    public Query() {}

    public Query(String title, String description, boolean published, Long fk_Employeeid) {
        this.title = title;
        this.description = description;
        this.published = published;
        this.fk_Employeeid = fk_Employeeid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Query query = (Query) o;
        return Objects.equals(id, query.id) &&
                Objects.equals(title, query.title) &&
                Objects.equals(description, query.description) &&
                Objects.equals(published, query.published);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, published);
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean isPublished) {
        this.published = isPublished;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Long getFk_Employeeid() {
        return fk_Employeeid;
    }

    public void setFk_Employeeid(Long fk_Employeeid) {
        this.fk_Employeeid = fk_Employeeid;
    }

    @Override
    public String toString() {
        return "com.example.entity.Query{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", published='" + published + '\'' +
                '}';
    }
}
