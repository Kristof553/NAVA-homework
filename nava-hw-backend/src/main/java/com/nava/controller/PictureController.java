package com.nava.controller;

import com.nava.model.Picture;
import com.nava.model.ViewCounter;
import com.nava.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/picture")
public class PictureController {


    private PictureService pictureService;


    @Autowired
    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @GetMapping
    private List<Picture> getAllPictures(){
        return pictureService.getAllPictures();
    }

    @GetMapping("{picture_id}")
    private Picture getOnePicture(@PathVariable Long picture_id){
        return pictureService.getOnePicture(picture_id);
    }

    @GetMapping("/views/{picture_id}")
    private int getViewsFromPicture(@PathVariable Long picture_id){
        return pictureService.getViewsFromPicture(picture_id);
    }

    @PostMapping
    private void addPicture(@RequestBody Picture picture){
        ViewCounter viewCounter = new ViewCounter(picture, 0);
        pictureService.addPicture(picture);
        pictureService.addViews(viewCounter);
    }

    @DeleteMapping(value = "{id}")
    private void deletePicture(@PathVariable Long id){
        pictureService.deletePicture(id);
    }

    @PutMapping(value = "{id}")
    private void upgradePictureDetails(@PathVariable Long id, @RequestBody Picture picture){
        pictureService.upgradePictureDetails(id, picture);
    }

    @PutMapping(value = "/increase_view/{id}")
    private void increaseView(@PathVariable Long id){
        pictureService.increaseView(id);
    }

}
