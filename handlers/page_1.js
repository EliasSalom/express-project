const path=require("path");
const fs=require("fs");
function home(req, res){
res.sendFile(path.join(__dirname,"..","public/page1.html"));
}
module.exports={home};