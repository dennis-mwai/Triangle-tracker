var dimension1,dimension2,dimension3;

// class History{
//     constructor(dim1,dim2,dim3){
//         this.dimen1 = dim1;
//         this.dimen2 = dim2;
//         this.dimen3 = dim3;
//     }
// }


var lengths = [];
function writeToDocument(){
    for (var i = 0; i<lengths.length; i++ ) {
        var node = document.createElement('Li');
        // appending the dictionary item containing history to html.
        var textnode = document.createTextNode('a : '+lengths[i]['dimension 1']+' - b : '+lengths[i]['dimension 2']+' - c : '+lengths[i]['dimension 3']+'\n      '+lengths[i]['comments']);
        node.appendChild(textnode);
        var writeTo = document.getElementById('history');
        writeTo.appendChild(node);
    }
}

function getInputs(){
    
    dimension1 = parseInt(document.getElementById("dimension1").value);
    dimension2 = parseInt(document.getElementById("dimension2").value);
    dimension3 = parseInt(document.getElementById("dimension3").value);
    
    triangle(dimension1,dimension2,dimension3);
    var comments = triangle(dimension1,dimension2,dimension3)

    // create a dictionary item to format current data;
    var collectedDims = {'dimension 1':dimension1,'dimension 2':dimension2,'dimension 3':dimension3,'comments':comments};
    lengths.push(collectedDims);
    console.log(lengths);
    
    var writeTo = document.getElementById('history');

    // removes all history and readys the history section for writting.
    while (writeTo.firstChild) {
        writeTo.removeChild(writeTo.firstChild);

    }

    // writes your typing history to the webpage.
    writeToDocument();

//  var currentData = new History(dimension1,dimension2,dimension3);
//  calcHistory.push(currentData);
//  console.log(currentData);
//  console.log(calcHistory);
}



   document.getElementById("myAnchor").addEventListener("submit", function(event){
   event.preventDefault()
});
 
// document.getElementById("results").addEventListener("click",getInputs);

function triangle(dimension1,dimension2,dimension3) {
    if (dimension1 + dimension2 > dimension3 && dimension1 + dimension3 > dimension2 && dimension2 + dimension3 > dimension1)
    {
        if (dimension1 === dimension2 && dimension3 === dimension1) {
            var display = document.getElementsByClassName("results");
            display[0].innerHTML = "This is an <span style = 'color:brown'>Equilateral</span> triangle";
            return "This is an Equilateral triangle";
        }
        else if (dimension1 === dimension2 || dimension1 === dimension3 || dimension2 === dimension3) {
            var display = document.getElementsByClassName("results");
            display[0].innerHTML = "This is an <span style = 'color:brown'>Isosceles</span> triangle";
            return "This is an Isosceles triangle";
        }
        
        else {
            var x = document.getElementsByClassName("results");
            x[0].innerHTML = "This is an <span style = 'color:brown'>Scalene</span> triangle";
            return "This is a Scalene triangle";
        }
    }
    else {
        var x = document.getElementsByClassName("results");
        x[0].innerHTML = "The dimensions you have entered do not form a triangle! Enter new dimensions";
        return "The dimensions you have entered do not form a triangle! Enter new dimensions"
    }

}