function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(400);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function memorize(fn, limit) {
  let memory = [];
  return function (...rest) {
    let foundElement = memory.find((item) => compareArrays(item.args, rest));
    if (foundElement) {
      return foundElement.result;
    }
    if (memory.length >= limit) {
      memory.shift();
    }
    let resultFn = fn(...rest);
    memory.push({args: rest, result: resultFn});
    return resultFn;
  }
}

function testCase(testFunction, sumTimer) {
  const arr = [ [1,2,1], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(sumTimer);
  for (i = 1; i <= 100; i++) {
    arr.forEach((item) => testFunction(...item));
  }
  console.timeEnd(sumTimer);
}

//testCase(memorize);
