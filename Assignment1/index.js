const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, function(err){
		if(err) throw err;
		console.log("Saved..!")
	})	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, function(err, data){
		if(err) throw err;
		console.log(`Data updated`)
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile = (fileName, fileContent, function(err){
		if(err) throw err;
		console.log("Updated Successfully")
	})
	
	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName, function(err){
		if(err) throw err;
		console.log("File Deleted Successfully")
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }