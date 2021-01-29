var fileop=require("fs")

fileop.appendFile("d.txt","hello",function(err)
{
	if(err)
	{
		return console.error(err)
	}
	else
	{
		console.log("writing is done")
		fileop.readFile('d.txt',function(err,data){

	console.log("the data is",+data.toString());

		});
	}
})