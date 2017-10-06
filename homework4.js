// Question 1
const triangleStars=function(a){
  const height=a;
  const print=function(h){
    if(h<=0)
      return "";
    console.log(spaces(h-1)+stars(2*h-1));
    print(h-1);
  };
  const spaces=function(num){
    if(num>=height)
      return "";
    return " "+spaces(num+1);
  };

const stars = function(num){
    if(num>0)
      return ("*" + stars(num-1));
      return "";
};
  print(a);
};



// Question 2
const pow=function (base, n) {
  if(n>0)
    return base * pow(base,n-1);
  return 1;
};

// Question 3
const reverse=function(str){
  const length=str.length;
  const times= function(a, str){
    if(a<0)
      return "";
    return str[a]+times(a-1, str);
};
return times(length-1, str);
};


// Question 4
const checkerboard=function(a){
  const height=a;
  const print=function(num){
    if(num<=0)
      return "";
    console.log(spaces(num-1)+line(height));
    print(num-1);
  }
  const line=function(n){
    if(n<=1)
      return "";
    return " *"+ line(n-1);
  }
  const spaces=function(n){
    if(n%2===1)
      return "*";
    return " *"
  }
  return print(a);
}
