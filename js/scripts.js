alert("Enter your dimensions now");
var dimension1 = parseInt(prompt("Enter your first dimension:"));
var dimension2 = parseInt(prompt("Enter your second dimension:"));
var dimension3 = parseInt(prompt("Enter your third dimension:"));

var triangle = true;
if (dimension1 + dimension2 > dimension3 && dimension1 + dimension3 > dimension2 && dimension2 + dimension3 > dimension1){
if (dimension1 === dimension2 && dimension3 === dimension1) 
{
alert("This is an equilateral triangle")
}
else if (dimension1 === dimension2 || dimension1 === dimension3 || dimension2 === dimension3)
{
alert("This is an isosceles triangle")
}
else if (dimension1 !== dimension2 !== dimension3)
{
alert("This is a scalene triangle")
}
else 
{
alert("Enter your dimensions again!")
} 
}
else
{
    alert("The dimensions you have entered do not form a triangle! Enter new dimensions")
}