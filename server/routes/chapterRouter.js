const { Router } = require("express");
const chapterController = require("../controllers/chapterController");
const multer = require("../middleware/multerConfig");

const chapterRouter = Router();

chapterRouter.get("/chapters", chapterController.listChapters);

chapterRouter.get("/chapters/:id", chapterController.getChapter);

chapterRouter.delete("/chapters/:id", chapterController.deleteChapter);

//this doesn't upload the files, only details (title,desc,type,thumbnail)
chapterRouter.post(
  "/chapters",
  multer.uploadMulti,
  chapterController.createChapter
);

// chapterRouter.put(
//   "/chapters/:id",
//   multer.uploadMulti,
//   chapterController.editChapter
// );

module.exports = chapterRouter;
