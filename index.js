function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  const namedFunction = (myFunction) => 1 + 1;
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => {
    console.log("anon function called");
  };
  // return function(){}
}
