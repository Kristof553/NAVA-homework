package com.nava.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long picture_id;
    private String name;
    private String creator;

    public Picture(Long id, String name, String creator) {
        this.picture_id = id;
        this.name = name;
        this.creator = creator;
    }

}