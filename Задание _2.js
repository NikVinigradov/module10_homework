// Задание 2// 

let num;

if ((typeof(num) == 'number') && (!isNaN(num))) {
    console.log("Является числом");
} else if (typeof(num) == 'string') {
    console.log("Является строкой");
} else if (typeof(num) == 'boolean') {
    console.log("Является булевым значением");
} else {
    console.log("Не определено");
}
