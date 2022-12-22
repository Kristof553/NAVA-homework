package com.nava.service;

import com.nava.model.Picture;
import com.nava.model.ViewCounter;
import com.nava.repositories.PictureRepository;
import com.nava.repositories.ViewCounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PictureService {


    private PictureRepository pictureRepository;

    private ViewCounterRepository viewCounterRepository;

    @Autowired
    public PictureService(PictureRepository pictureRepository, ViewCounterRepository viewCounterRepository) {
        this.pictureRepository = pictureRepository;
        this.viewCounterRepository = viewCounterRepository;
    }

    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }

    public void addPicture(Picture picture) {
        pictureRepository.save(picture);
    }

    public void deletePicture(Long id) {
        Picture picture = pictureRepository.findById(id).get();
        ViewCounter viewCounter = viewCounterRepository.findById(picture.getPicture_id()).get();
        viewCounterRepository.delete(viewCounter);
        pictureRepository.delete(picture);

    }

    public void upgradePictureDetails(Long id, Picture picture) {
        Picture oldPicture = pictureRepository.findById(id).get();
        ViewCounter viewCounter = viewCounterRepository.findById(picture.getPicture_id()).get();
        viewCounter.setViews(0);
        oldPicture.setCreator(picture.getCreator());
        oldPicture.setName(picture.getName());
        pictureRepository.save(oldPicture);
        viewCounterRepository.save(viewCounter);
    }

    public void addViews(ViewCounter viewCounter) {
        viewCounterRepository.save(viewCounter);
    }

    public int getViewsFromPicture(Long picture_id) {
        ViewCounter viewCounter = viewCounterRepository.findById(picture_id).get();
        return viewCounter.getViews();
    }

    public void increaseView(Long picture_id) {
        ViewCounter viewCounter = viewCounterRepository.findById(picture_id).get();
        int views = viewCounter.getViews();
        viewCounter.setViews(views + 1);
        viewCounterRepository.save(viewCounter);
    }
}
