function example(val1,val2,val3){
  var a = val1;
  var b = val2;
  var c = val3;
  var d;
  d = b*b-4*a*c;
  if(d<0){
    alert('error');
  }
  else if(d==0){
    console.log('x = '+(-b)/(2*a));
  }
  else{
    console.log('x1 = '+((-b)+Math.sqrt(d))/(2*a));
    console.log('x2 = '+((-b)-Math.sqrt(d))/(2*a));
  }
}
example(1,4,3);
