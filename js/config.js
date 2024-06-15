// 1
// let a = 5;
// let b = 9;
// console.log(a+b);
// console.log(b+a);

// 2
// let a = '12';        // a ni satr (string) deb e'lon qilamiz
// let numberA = Number(a);  // a ni son (number)ga o'zgartiramiz

// console.log(numberA);    // numberA ni konsolda chiqaramiz
// console.log(typeof numberA); // numberA ning turini (data type) konsolda chiqaramiz

// 3
// let randomNumber = Math.floor(Math.random() * 101);

// alert ('Tasodifiy son: ' + randomNumber);
// if (randomNumber % 2 === 0) {
//     console.log(randomNumber + ' - Juft son');
// } else {
//     console.log(randomNumber + ' - Toq son');
// }

// 4
// let inputWord = prompt('So\'z kiriting:');

// if (inputWord === 'mars') {
//     console.log(inputWord);  
// } else {
//     console.log('MARS IT school');  
// }

// 5
// let wordsArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// let longWordsArray = [];

// for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length >= 5) {
//         longWordsArray.push(wordsArray[i]);
//     }
// }

// console.log(longWordsArray);

6
for (let i = 1; i <= 100; i++) {
    // Sonning juft yoki toqligini tekshiramiz
    if (i % 2 === 0) {
        console.log(i + ' - Juft son');
    } else {
        console.log(i + ' - Toq son');
    }
}