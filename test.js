// const arr = ["Alexa", "Grace", "Lexi"];
// const arr2 = [...arr, "Lore"];
// console.log(arr2);

// function currying
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const level = add(10);
console.log(level(2)(2));
