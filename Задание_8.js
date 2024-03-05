// Задание 8 //


let myMap = new Map();
myMap.set("qwerty 1", "key Q");
myMap.set("qwerty 2", "key W");
myMap.set("qwerty 3", "key E");
myMap.set("qwerty 4", "key R");
myMap.set("qwerty 5", "key T");

for (let myMap1 of myMap.keys()) {
    console.log(myMap1 + " is " + myMap.get(myMap1));
}