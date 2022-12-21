package com.nava.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class ViewCounter {

    @Id
    @GeneratedValue
    private Long counterElementId;

    @OneToOne
    private Picture picture;

    private int views;

    public ViewCounter(Picture picture, int views) {
        this.picture = picture;
        this.views = views;
    }


}
