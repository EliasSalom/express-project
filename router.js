const express=require("express");
const router = express.Router();
const handlers=require("./handlers/page_1");

router.get('/',handlers.home);

module.exports = router;