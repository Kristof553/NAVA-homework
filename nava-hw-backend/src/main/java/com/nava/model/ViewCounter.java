package com.nava.model;

import javax.persistence.*;

@Entity
public class ViewCounter {

    @Id
    @GeneratedValue
    private Long counterElementId;

    @OneToOne
    private Picture picture;

    private int views;
}
