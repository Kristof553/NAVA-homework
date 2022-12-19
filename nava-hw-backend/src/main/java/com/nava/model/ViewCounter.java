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
public class ViewCounter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pictureId;

    private int views;

    public ViewCounter(int pictureId, int views) {
        this.pictureId = pictureId;
        this.views = views;
    }
}
