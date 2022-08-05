
function valid(){
    let inputs = document.getElementsByClassName("input-data");
    for(i=0; i<inputs.length; i++){
        if(inputs[i].innerHTML == ""){
            return false;
        }
    }
    return true
}

function checkForm(){
    if(!valid()){
        let a = document.getElementsByClassName("warning");
        let inputs = document.getElementsByClassName("input-data");
        for( i=0; i<a.length; i++){
            a[i].style.display = "block";
            inputs[i].style.border="1px solid hsl(0, 100%, 74%)";
        }
        return false;
    }    
}
