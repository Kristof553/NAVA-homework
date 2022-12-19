package com.nava.service;

import com.nava.model.Picture;
import com.nava.repositories.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PictureService {


    private PictureRepository pictureRepository;

    @Autowired
    public PictureService(PictureRepository pictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }

    public void addPicture(Picture picture) {
        pictureRepository.save(picture);
    }

    public void deletePicture(int id) {
        Picture picture = pictureRepository.findById((long) id).get();
        pictureRepository.delete(picture);
    }
}
