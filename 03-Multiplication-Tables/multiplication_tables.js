// write your code below

for(var num = 0; num <= 10; num++) {
    var multiply = num * 9
    console.log(num+ "* 9 = "+multiply)
}

//extra

function number (num, n) {
    var num = prompt("Can I get any number from 0-10")
    for(var n = 0; n <= 10; n++){
        var result = num * n;
        window.alert(num + " * " + n + " = " + result)
    }
}

number()