function cbName(callback) {
  callback();
}
function callback(){
  console.log("callback");
}

cbName(callback)