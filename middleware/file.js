const multer = require("multer");
const uploadAvatarActor = multer({ dest: "public/avatar" });
const uploadMovie = multer({ dest: "public/movies" });
const fs = require("fs");

const uploadAvartar = uploadAvatarActor.fields([
  {
    name: "avartar",
    maxCount: 1,
  },
]);

const CheckUploadAvatar = (req, res, next) => {
  const files = req.files;

  if (!files["avartar"]) {
    console.log("file not changed");
  } else {
    const file = files["avartar"][0];
    // const addTail = file.destination.concat("/", file.originalname);
    // req.body["avartar"] = addTail;
    // fs.rename(file.path, addTail, (err) => {
    //   if (err) next(err);
    //   console.log("Uploaded field successfully!");
    // });
    req.body["avartar"] = file.path;
    req.originalname = file.originalname;
    req.destination = file.destination;
  }
  next();
};

const mutipleUploadMovie = uploadMovie.fields([
  { name: "poster", maxCount: 1 },
  { name: "trailer", maxCount: 1 },
]);

const CheckMutipleUploadMovie = (req, res, next) => {
  const files = req.files;
  let fields = ["poster", "trailer"];
  if (!files["poster"] && files["trailer"]) {
    console.log("poster not changed");
    fields = ["trailer"];
  }
  if (!files["trailer"] && files["poster"]) {
    console.log("trailer not changed");
    fields = ["poster"];
  }
  if (!files["trailer"] && !files["poster"]) {
    console.log("trailer not changed");
    fields = [];
  }
  fields.map((field) => {
    req.body[field] = {};
    req.body[field].url = files[field][0].path;
    req.body[field].originalname = files[field][0].originalname;
    req.body[field].destination = files[field][0].destination;
  });
  next();
};

const mutipleUploadEpisodes = uploadMovie.fields([{ name: "video", maxCount: 10 }]);
const checkMutipleUploadEpisodes = (req, res, next) => {
  const files = req.files;
  if (!files) {
    console.log("file not changed");
  } else {
    req.body.video = files["video"].map((file, index) => {
      return {
        index: index,
        originalname: file.originalname,
        destination: file.destination,
        path: file.path,
      };
    });
  }
  next();
};
module.exports = {
  mutipleUploadMovie,
  CheckMutipleUploadMovie,
  uploadAvartar,
  CheckUploadAvatar,
  mutipleUploadEpisodes,
  checkMutipleUploadEpisodes,
};
