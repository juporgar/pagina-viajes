const Express = require('express');
const Router = Express.Router();
const Multer = require('multer');

const Storage = Multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "public/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
});

const Upload = Multer({Storage});


Router.get('/',(req,res,next)=>{
    res.render('uploads',{
        title:'Subir archivos'
    });
});

Router.post('/upload',Upload.single('file'),(req,res,next)=>{
    res.json(req.file);
})
module.exports=Router;