import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + '-' + ext);
    }

});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png'
        ) {
            cb(null, true)
        } else {
            console.log('Only jpeg/png/jpg formats are supported')
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 1 // 1MB
    }
})

export default upload;