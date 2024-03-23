const flaten = (input) => {
  let res = [];

  while (input.length) {
    const next = input.pop();

    if (Array.isArray(next)) {
      input.push(...next);
    } else {
      res.push(next);
    }
  }

  return res.reverse();
};
console.log("usng our function", flaten([1, 2, 3, [3, 4, [6]]]));

console.log("using flat method", [1, 2, 3, [3, 4, [6]]].flat(2));
