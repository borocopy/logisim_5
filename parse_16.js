const raw = (0x876f).toString(2).split('');
const data = raw.map((v, idx) => {
  const [x, y, z, w] = idx.toString(2).padStart(4, '0').split('').map(Number);
  return { x, y, z, w, F: Number(v) };
});

const positive = data.filter((entry) => entry.F == 1);
const negative = data.filter((entry) => entry.F == 0);

const dnf = positive.map(({ x, y, z, w }) => {
  return {
    value: [x, y, z, w].join(''),
    x: x == 1 ? 'x' : 'not x',
    y: y == 1 ? 'y' : 'not y',
    z: z == 1 ? 'z' : 'not z',
    w: w == 1 ? 'w' : 'not w',
  };
});

const cnf = negative.map(({ x, y, z, w }) => {
  return {
    value: [x, y, z, w].join(''),
    x: x == 0 ? 'x' : 'not x',
    y: y == 0 ? 'y' : 'not y',
    z: z == 0 ? 'z' : 'not z',
    w: w == 0 ? 'w' : 'not w',
  };
});

console.log('СДНФ:');
console.table(dnf);
console.log('СКНФ:');
console.table(cnf);
