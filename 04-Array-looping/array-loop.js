var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var num = 0;
var str = 0;
arr1.forEach(function(item) {
    if(typeof item === "number") {
        num = num +1;
    } else {
        str = str +1;
    }
});

console.log(num+ " is the quantity of numbers")
console.log(str+ " is the quantity of strings")


    /*extra*/
    
    
    
var array2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var frequent = 1;
var number = 0;
var item;

for (var i = 0; i < array2.length; i++) {
    for (var j = i; j < array2.length; j++) {
    if (array2[i] == array2[j]) number++;
    if (frequent < number) {
        frequent = number;
        item = array2[i];
    }
    }

    number = 0;
}

console.log(item + " ( " + frequent + " times ) ");
    
//var result = array2.filter(function i(i === "a")).length;
//console.log('number of the found elements: ' + result);