const readline = require('readline');

// // Complete the rotLeft function below.
function rotLeft(a, d) {
  const temp = a.slice(0, d)
  const arr = a.slice(d)
  const r = [...arr, ...temp]
  console.log({
    temp,
    arr,
    r
  })
  return r
}

const getLine = (function () {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => ((await getLineGen.next()).value);
})();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const main = async () => {
  console.log('write length array and number of rotates ' + '\n')
  const nd = (await getLine()).split(' ');
  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);
  console.log('write array' + '\n');
  const a = (await getLine()).split(' ').map(aTemp => parseInt(aTemp, 10));


  console.log(`n = ${n}, d= ${d}, a= ${a} `);
  const result = rotLeft(a, d);
  console.log(result.join(' ') + '\n');
  process.exit(0);
};

main();




