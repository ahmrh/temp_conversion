const temp = document.querySelectorAll('select')

const input = document.querySelectorAll('input')

//Input 
input[0].addEventListener('focus', function() {
    input[0].style.background = 'lightblue';
})

input[0].addEventListener('blur', function() {
    input[0].style.background = '';
    convert();
})

// temp[0]
temp[0].addEventListener('focus', function() {
    temp[0].style.backgroundColor = 'lightblue';
})

temp[0].addEventListener('blur', function() {
    temp[0].style.background = '';
    convert();
})

temp[1].addEventListener('focus', function() {
    temp[1].style.background = 'lightblue';
})

temp[1].addEventListener('blur', function() {
    temp[1].style.background = '';
    convert();
})



function convert(){
    let index1 = temp[0].selectedIndex;
    let index2 = temp[1].selectedIndex;
    
    if(index1 == index2){
        if(input[0].value != input[1].value){
            input[1].value = input[0].value;
        }
    }

    // celcius to other
    if(index1 == 0 && index2 == 1){
        input[1].value = round(input[0].value * 9 / 5 + 32) ;
    }

    if(index1 == 0 && index2 == 2){
        input[1].value = round(input[0].value * 4 / 5) ;
    }

    // fahrenheit to other
    if(index1 == 1 && index2 == 0){
        input[1].value = round((input[0].value - 32) * 5 / 9);
    }

    if(index1 == 1 && index2 == 2){
        input[1].value = round((input[0].value - 32) * 4 / 9);
    }

    // reamur to other
    if(index1 == 2 && index2 == 0){
        input[1].value = round(input[0].value * 5 / 4);
    }

    if(index1 == 2 && index2 == 1){ 
        input[1].value = round(input[0].value * 9 / 4 - 32) ;
    }

}

function round(num){
    return Math.round(num * 1000) / 1000;
}
