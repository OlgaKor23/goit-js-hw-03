const findBestEmployee = function(employees) {
  //твой код
  const keys = Object.keys(employees);
  const value = Object.values(employees);

  let biggestValue = value[0];
  let bestEmployer = keys[0];

  for (let i = 1; i < value.length; i += 1) {
    if(value[i] > biggestValue) {
        biggestValue = value[1];
        bestEmployer = keys[1]
    }

    return bestEmployer;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux