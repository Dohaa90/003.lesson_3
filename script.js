let a = prompt('Как тебя зовут?');
let b = prompt('Сколько тебе лет?');
let c = prompt('В какой стране ты живешь?');
alert(a.concat(' ', b, ' ', c));

let number = 12345;
array = number.toString();
let regexp = /\d/g;
alert( array.match(regexp).join(' '));
alert( array.split("").reverse().join(" "));