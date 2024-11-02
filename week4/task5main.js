function calculate(operator,num1,num2)
{
    let result;
    if(operator==="+"){
        result = num1 + num2;
    }
    else if(operator==="-")
    {
        result=num1-num2;
    }
    else if(operator==="*")
    {
        result=num1*num2;
    }
    else if(operator==="%")
    {
        result=num1%num2;
    }
    else if(operator==="/"){
    result=num2!==0?num1/num2:"Cant divide by 0";
    }
    else{
        console.log("Invalid operator");
    }
    return result;

}
console.log("Addition is:",calculate("+",10,2));
console.log("subraction is:",calculate("-",10,2));
console.log("Multiplication is:",calculate("*",10,2));
console.log("Division is:",calculate("/",10,2));
console.log("Modulus is:",calculate("%",10,2));
console.log("invalid operation is is:",calculate(10,2));