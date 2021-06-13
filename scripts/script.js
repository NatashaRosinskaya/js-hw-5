//Задание 1 
function number (a, b, c){
    return (a - b) / c;
}
let d = number (24, 4, 2);
console.log (d);

//Задание 2
function number2 (a2){
    return a2 * a2 * a2;    
}
let b2 = number2(6);
console.log(b2);

function number3 (a3){
    return a3 * a3;    
}
let b3 = number3(6);
console.log(b3);

//Задание 3
function min (m, n){
    if (m < n){
        return m;
    } else {
        return n;
    }
}
let minimum = min (5, 8);
console.log (minimum);

function max (m, n){
    if (m < n){
        return n;
    } else {
        return m;
    }
}
let maximum = max (34, 29);
console.log (maximum);

//Задание 4 (??)
let array = [],
        c;
function enterArray (array){    
    for (;;) {
    c = +prompt('Введите число');
    if (c == ""){
        break
    }
    if (!isNaN(c)){
        array.push(c);
    }
    } return array;
}
console.log(enterArray (array));

//Задание 5
function isEven(a){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log (isEven (77));

//Задание 6 (!!)

function evenArray(array){
    let newEvenArray = [];
    for (i = 0; i < array.lengtn; i++){ 
        let b = array[i];
        let even = isEven (b);
        if (even === true){
            newEvenArray.push(b);
        }               
    } return newEvenArray;
} 
evenArray ([5, 8, 10, 95, 758, 321, 18]);


//Задание 7 
function pyramid(m){
  
  for(let i = 1; i <= m; i++){
      
    for (let k = 1; k<= m - i; k++){
    
    }

    for (let j = 0; j < i; j++){ 

        document.write(`${i}`);
    }document.write('<br>');
}
};
pyramid (9);

//Задание 8
let g = +prompt ('Введите число')
function pyramidStar (g){
    for(let i = 1; i <= g; i++){

    for (let k = 1; k<= g - i; k++){
        document.write(`&ensp;`);
    }

    for (let j = 0; j < i*2 - 1; j++){ 
        document.write('*');
    }document.write('<br>');
}
}

pyramidStar (g);
//---------
