// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking", "Hacking", "Guitar"];

// スプレッドオペレータ（配列）
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

// スプレッドオペレータ（オブジェクト）
const copiedPerson = {
  ...person,
};

console.log(copiedPerson);

// レストパラメータ
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// 分割代入（配列）
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

// 分割代入(オブジェクト)
const { firstName: userName, age } = person;
console.log(userName, age, person);
