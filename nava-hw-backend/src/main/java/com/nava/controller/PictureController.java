package com.nava.controller;

import com.nava.model.Picture;
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

    @PostMapping
    private void addPicture(@RequestBody Picture picture){
        pictureService.addPicture(picture);
    }

    @DeleteMapping(value = "{id}")
    private void deletePicture(@PathVariable Long id){
        pictureService.deletePicture(id);
    }
    @PutMapping(value = "{id}")
    private void upgradePictureDetails(@PathVariable Long id, @RequestBody Picture picture){
        pictureService.upgradePictureDetails(id, picture);
    }

}
