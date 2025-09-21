
// display number in the textbox
function displaynumber(num){
    result.value+=num
}

// clear the textbox
function clearvalue(){
    result.value=""
}

// evaluate expression
function evaluateExp(){
    result.value=eval(result.value)
}

// remove last item from the textbox
function removelastitem(){
    result.value=result.value.slice(0,-1)
}