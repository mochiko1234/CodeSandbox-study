/* アロー関数 */

//従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1,  num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

// /* 分割代入 */
// const myProfile = {
//   name: "もちこ",
//   age: 14,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message2);

// const myProfile = ['もちこ',14];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/* デフォルト値、引数など */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("もちこ");

/* スプレッド構文 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/* mapやfillterを使った配列の処理 */
//const nameArr = ["田中", "山田", "もちこ"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//★★★mapは、一つ目の引数で配列の中身を取得し、二つ目の引数で配列の順番を取得できる！
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "もちこ"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/* アロー関数 */

//従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1,  num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

// /* 分割代入 */
// const myProfile = {
//   name: "もちこ",
//   age: 14,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message2);

// const myProfile = ['もちこ',14];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/* デフォルト値、引数など */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("もちこ");

/* スプレッド構文 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/* mapやfillterを使った配列の処理 */
// const nameArr = ["田中", "山田", "もちこ"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//★★★mapは、一つ目の引数で配列の中身を取得し、二つ目の引数で配列の順番を取得できる！
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "もちこ"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/* 三項演算子 */
//ある条件　？　　条件がtrueの時　　：条件がfalseの時
// const val1 = 1 > 0 ? 'tureです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲です';
// }

// console.log(checkSum(50, 40));

/* 論理演算子の本当の意味を知ろう 　&& ||　*/

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||　は左側がfalseなら右側を返す（結果、“または”の動きをする）
// const num = 100;
// const fee = num || "金額は未定です";
// console.log(fee);

// &&　は左側がtrueなら右側を返す（結果、“かつ”の動きをする）
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
