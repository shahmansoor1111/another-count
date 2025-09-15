let count = 0
function rights () {
    count++;
    
    let inputs = document.getElementById("inputBox")
    inputs.value = count

}

function lefts () {
    count--;
    if(count<0) {
        count = 0
    }

    let inputs = document.getElementById("inputBox")
    inputs.value = count
    
}

