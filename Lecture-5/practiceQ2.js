// Create a promise that simulates downloading a file. If the file exists, it resolves with a success message; otherwise, it rejects with an error.

function downloadFile(fileExists) {
    return new Promise(function(resolve, reject) {
        
        if (fileExists) {
            resolve("File downloaded!");
        } else {
            reject("Download failed.")
        }
    });
}


downloadFile(true) // should resolve with "File downloaded!"
.then((message)=> console.log(message))
.catch((error) => console.error(error)); 
downloadFile(false) // should reject with "Download failed."
.then((message)=> console.log(message))
.catch((error) => console.error(error)); 