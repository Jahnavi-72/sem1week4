let numbers=[1,2,3,4,5,6,7,8,9,10];
let evennumbers=numbers.filter(numbers=>numbers%2==0);
console.log("Even Numbers",evennumbers);
let sumofevennumbers=evennumbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log("Sum of even numbers",sumofevennumbers);

