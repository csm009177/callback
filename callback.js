function func(callback) {
  callback();
}
function callback(){
  console.log("is callback");
}

func(callback)
