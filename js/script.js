let hour = 30;

if (hour <= 45){
    console.log("hi");
} else if(hour < 100){
    console.log("bye")
}

let numbers = [6, 4, 87, 90, 43, 87, 18, 20, 78, 109]
let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] %2 !=1){
        even.push(numbers[i]);
    }else{
        odd.push(numbers[i]);
    }
}

console.log(even);
console.log(odd);
let total = 0;

for (let i = 0; i < odd.length; i++){
    total += odd[i]; 
}

console.log(total);

function tester(){
    if (bool == true){
        document.getElementById('display').innerHTML = "happy";
    } else {
        document.getElementById('display').innerHTML = "sad";
    }
}


let numberss = [5, 6, 19, 70, 100, 90, 189];
let sum = 0;

for (let i= 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum)


let numbersss = ["apple", "banana", "orange"];

function gotoEnd (arr, element) {
    arr.push(element);
}

gotoEnd(numbersss, "grape");

console.log(numbersss)

let theNumber = 30;

if (theNumber >= 18){
    console.log("you are an adult");
} else if(theNumber < 100){
    console.log("you are a minor")
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


document.getElementById('theButton');

button.addEventListener('click', function() {
    alert ('button clicked!');
});