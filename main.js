let n = 100;
let m = -5;
let count = 70;

let array = [];

if (n < m) {
   l = n;
   k = m;
} else {
    k = n;
    l = m;
}

for (let i = 0; i < (count); ++i) {
    array.push(Math.round(Math.random()*(k-l) + l));
}

console.log(array);






let str = "!рим ,тевирП";
let ind = [];
let leng = str.length;

for (let i = 0; i < (leng); ++i) {
    ind.unshift(str[i]);
}

console.log(ind);






let roadMines = ["false", "false", "false", "false", "false", "false", "true", "true", "false", "true"];
let v = roadMines.length;
let schet = 0;


for (let position = 0; position < (v); ++position) {
    if (roadMines[position] === "false") {
    console.log("танк переместился на", (position + 1));
    schet = schet +0;
} else if ((roadMines[position] === "true" && schet < 1)){
    console.log("танк переместился на", (position + 1));
    console.log("танк поврежден");
    schet = schet + 1;
} else {
    console.log("танк переместился на", (position + 1));
    console.log("танк уничтожен");
    break
}
}







let nachalo = 2;
let days = 31;
let b = -1;
let mesjac = Array.from({length: days}, (_, index) => index + 1)
console.log(mesjac);

let nedel = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
console.log(nedel);

for (let i = 0; i < days; ++i) {
    console.log(mesjac[i], "января, ", nedel[nachalo+i]);
    b = b + 1;
    nedel.push(nedel[0+b]);
}

