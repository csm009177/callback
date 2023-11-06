function test(print){
  console.log(`result: ${print}`)
}

test("test");

function later(callback){
  const print = "test2"
  callback(print);
}

later(test);


