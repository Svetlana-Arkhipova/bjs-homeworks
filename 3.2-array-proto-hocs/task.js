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
  return function fn2() {
    let n = Array.from(arguments);

    function find(n) {
      for (let i = 0; i < memory.length; i++) {
        if (compareArrays(n, memory[i].args) === true) {
          return memory[i];
        }
      }
    }

    let f = find(n);
    if (f !== undefined) {
      return f.result;
    } else {
      if (memory.length >= limit) {
        memory.shift();
      }
      let res = fn(...n);
      memory.push({args: n, result: res});
      return res;
    }
  }
}
