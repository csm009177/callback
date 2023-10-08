function add(val){
  return (val+2);
}

function caller(func, val){
  return func(val);
}
console.log(caller(add,5))