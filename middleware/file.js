const multer = require("multer");
const uploadAvatarActor = multer({ dest: "public/avatar" });
const uploadMovie = multer({ dest: "public/movies" });
const fs = require("fs");
const { responseInValid } = require("../helper/ResponseRequests");

// const multipleUploads = upload.fields([
//   { name: "file", maxCount: 10 },
//   { name: "image", maxCount: 10 },
// ]);

// const checkMultipleFile = (req, res, next) => {
//   const files = req.files;
//   const fields = ["file", "image"];

//   if (!files) {
//     console.log("file not change!");
//   } else {
//     fields.map((field) => {
//       req.body[field] = [];
//       if (files[field]) {
//         files[field].map((file) => {
//           const addTail = file.destination.concat("", file.originalname);
//           req.body[field] = req.body[field].concat(addTail.split("/").slice(1).join("/"));
//           fs.rename(file.path, addTail, (err) => {
//             if (err) next(err);
//             console.log("Uploaded field successfully!");
//           });
//         });
//       }
//     });
//   }

//   next();
// };

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
  { name: "poster_url", maxCount: 1 },
  { name: "trailer_url", maxCount: 1 },
]);

const CheckMutipleUploadMovie = (req, res, next) => {
  const files = req.files;
  console.log(files);
};
module.exports = {
  // multipleUploads,
  // checkMultipleFile,
  mutipleUploadMovie,
  CheckMutipleUploadMovie,
  uploadAvartar,
  CheckUploadAvatar,
};
