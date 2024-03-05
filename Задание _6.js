// Задание 6 //

let arr = ["q", "w", "e", "r", "t", "y", "u"];

let same = true;
for (let i = 0; i < arr.length -1; i++) {
    for (let j = 1 + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            same = false;
        }
    }
}

if (same) {
    console.log("Элементы в мастве одинаковые");
} else {
    console.log("Элементы в мастве не одинаковые");
}