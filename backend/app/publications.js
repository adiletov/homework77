const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const fileDb = require('../fileDb');
const config = require('../config');


const storage = multer.diskStorage({
   destination: (req,file,cb) =>{
      cb(null, config.uploadPath)
   },
   filename: (req,file,cb)=>{
      cb(null, nanoid() + path.extname(file.originalname))
   }
});

const upload = multer({storage});


const router = express.Router();

router.get('/', async (req,res)=>{
   const publications = await fileDb.getDateBase();
   res.send(publications)
});

router.post('/', upload.single("image") , async (req,res)=>{
   const publication = req.body;
   if (req.file){
      publication.image = req.file.filename
   }
   if(publication.author === ""){
      publication.author = "anonymous"
   }

  await fileDb.addFileDateBase(publication);
   res.send('ok')
});


module.exports = router;