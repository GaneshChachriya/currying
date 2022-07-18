//curring using bind
let multiply = function(x, y){
    console.log(x*y);
}
let multiplyBYTwo = multiply.bind(this, 3);
multiplyBYTwo(5);
let multiplyByThree = multiply.bind(this,3,6);
multiplyByThree();
let multiplyByFour = multiply.bind();
multiplyByFour(4,5);
//currying using closure
let multiply1 = function(x){
    return function (y){
      console.log(x*y);
    }
}
let multiplyByFive = multiply1(2);
multiplyByFive(10);
let multiplyBySix = multiply1(4);
multiplyBySix(3);





