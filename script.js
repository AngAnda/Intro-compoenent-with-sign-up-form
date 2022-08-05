
// TO DO

function valid(){
    alert("valid");
    var v1 = document.getElementById("i1");
    var v = document.getElementsByClassName("input-data").value;

}

function checkForm(){
   // valid();
    var submit = document.getElementById("submit");  
}


function invalid(){
    var inputs= document.getElementsByClassName("warning");
    for( i=0; i<inputs.length; i++)
        inputs[i].style.display="block";
}