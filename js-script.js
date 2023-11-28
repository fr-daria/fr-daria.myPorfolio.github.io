let numb1 = parseInt(prompt("Введи первое число: "));
let numb2 = parseInt(prompt("Введи второе число: "));

sum();
razn();
umnozhenie();
raznost();

function sum(){
    alert(`Результат суммы: ${numb1 + numb2}`);
}
function razn(){
    alert(`Результат разницы: ${numb1 - numb2}`);
}
function umnozhenie(){
    alert(`Результат произведения: ${numb1 * numb2}`);
}
function raznost(){
    if (numb2 !== 0) {
        alert(`Результат деления: ${numb1 / numb2}`);
    } else {
        alert("На ноль делить нельзя!");
    }
}
