var fileop=require("fs");
fileop.readFile('file.txt',function(err,data){

	console.log(data.toString());

});
