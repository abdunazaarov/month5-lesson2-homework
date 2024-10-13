function reverseNumber() {
    let num = 12345;
    let reversed = num.toString().split('').reverse().join('');
    document.getElementById('result').textContent = "Teskari son: " + reversed;
    console.log("Teskari son: " + reversed); 
}

function arrayToObject() {
    let arr = ["text", "world", "laptop"];
    let obj = {};
    arr.forEach(item => obj[item] = item.length);
    document.getElementById('result').textContent = "Object: " + JSON.stringify(obj);
    console.log("Object: ", obj); 
}

function minMaxWord() {
    let sentence = "Men dasturlash kursida o'qiyman";
    let words = sentence.split(' ');
    let minWord = words.reduce((min, word) => word.length < min.length ? word : min, words[0]);
    let maxWord = words.reduce((max, word) => word.length > max.length ? word : max, words[0]);
    document.getElementById('result').textContent = `Min Word: ${minWord}, Max Word: ${maxWord}`;
    console.log(`Min Word: ${minWord}, Max Word: ${maxWord}`); 
}

function getLevel() {
    let n = 5;
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(2 ** i);
    }
    document.getElementById('result').textContent = "Result: " + result.join(', ');
    console.log("Result: ", result); 
}

function minLengthWord() {
    let sentence = "Men dasturlashni o'rganishni yaxshi ko'raman";
    let words = sentence.split(' ');
    let minWord = words.reduce((min, word) => word.length < min.length ? word : min, words[0]);
    document.getElementById('result').textContent = "Eng qisqa so'z: " + minWord;
    console.log("Eng qisqa so'z: " + minWord);
}

function multiplyValues() {
    const obj = {a: 2, b: 3, c: 4};
    let n = 3;
    for (let key in obj) {
        obj[key] *= n;
    }
    document.getElementById('result').textContent = "Natija: " + JSON.stringify(obj);
    console.log("Natija: ", obj); 
}

function countDigits() {
    let str = "Men 2024 yilda 12 yoshdaman";
    let count = (str.match(/\d/g) || []).length;
    document.getElementById('result').textContent = "Sonlar soni: " + count;
    console.log("Sonlar soni: " + count);
}

function sumToArray() {
    let arr = [1, 22, 3];
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let sumArray = sum.toString().split('');
    document.getElementById('result').textContent = "Yig'indisi: " + sumArray.join(', ');
    console.log("Yig'indisi: ", sumArray); 
}

function countWordsWithA() {
    let sentence = "Men dasturlashni o'rganmoqdaman";
    let words = sentence.split(' ');
    let count = words.filter(word => word.includes('a')).length;
    document.getElementById('result').textContent = "'A' ishtirok etgan so'zlar soni: " + count;
    console.log("'A' ishtirok etgan so'zlar soni: " + count); 
}

function findPowerOfTwo() {
    let n = 8;
    let k = Math.log2(n);
    document.getElementById('result').textContent = "2 ning darajasi: " + k;
    console.log("2 ning darajasi: ", k); 
}

function findMiddleNumber() {
    let arr = [1, 2, 3, 4, 5];
    let middle;
    if (arr.length % 2 === 0) {
        middle = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        middle = arr[Math.floor(arr.length / 2)];
    }
    document.getElementById('result').textContent = "O'rtadagi son: " + middle;
    console.log("O'rtadagi son: ", middle);
}