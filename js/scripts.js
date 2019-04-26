var dimension1,dimension2,dimension3;

function getInputs()
{
     dimension1 = parseInt(document.getElementById("dimension1").value);
     dimension2 = parseInt(document.getElementById("dimension2").value);
     dimension3 = parseInt(document.getElementById("dimension3").value);
     triangle(dimension1,dimension2,dimension3);
}
document.addEventListener("click",getInputs);

function triangle(dimension1,dimension2,dimension3)
{
    if (dimension1 + dimension2 > dimension3 && dimension1 + dimension3 > dimension2 && dimension2 + dimension3 > dimension1)
    {
        if (dimension1 === dimension2 && dimension3 === dimension1) 
        {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "This is an Equilateral triangle";
        }
        else if (dimension1 === dimension2 || dimension1 === dimension3 || dimension2 === dimension3)
        {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "This is an Isosceles triangle";
        }
        
        else if (dimension1 !== dimension2 !== dimension3)
        {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "This is a Scalene triangle";
        }
        
        else 
        {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "Enter new dimensions";
        }
    }
    else
    {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "The dimensions you have entered do not form a triangle! Enter new dimensions";
    }

}

  