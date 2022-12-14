const stringLength = (str) => {
  if(10 > str.length && str.length > 0){
    return str.length;
  }
  else{
    throw new Error ('string should be 1-10 char long');
  }
}

const reverseString = (str) => {
  return str.split("").reverse().join('');
}

class calculator {
  add= (num1,num2)=>  num1+num2;
  subtract= (num1,num2)=>  num1-num2;
  divide= (num1,num2)=>  num1/num2;
  multiply = (num1,num2)=>  num1*num2;
}

const capitalize = (str) => {
  return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

module.exports = {stringLength, reverseString, calculator,capitalize};