const count = 10000
const dataFn = () => (new Array(count).fill(undefined)).map((i, idx) => idx)
const maping = (num, idx, array) => {
  return {
    num: num + 1,
    idx: idx + 1,
    sum: num + idx
  }
}

/* Funcional */
export const NativeFunctionalMap = () => dataFn().map(maping)