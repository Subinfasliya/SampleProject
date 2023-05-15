const express = require('express');
const { requireSignIn, isAdmin } = require('../middleWears/middleWear');
const { createVideoController, getAllVideosController, courseVideoController, deleteVideoController, updateVideoController, } = require('../controllers/VideoController')
const formidable = require('express-formidable');
const { getAllVideos } = require('../controllers/activeStudentsController');

const fs = require('fs')
const path = require('path');
const { singleUpload } = require('../middleWears/multer/multer.js');









const router = express.Router();

//Upload videos router

router.post('/add-video', requireSignIn, isAdmin, createVideoController)

//Update video
router.put('/update-video/:id', requireSignIn, isAdmin, formidable(), updateVideoController)

//get all videos
router.get('/get-video', getAllVideosController)

//get course video
router.get('/course-video/:id', courseVideoController)

//delete video
router.delete('/delete-video/:id', deleteVideoController)

//get user video
router.get('/uservideos', requireSignIn, getAllVideos)



module.exports = router;