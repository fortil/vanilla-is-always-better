const R = {
  range: require('ramda/src/range'),
  addIndex: require('ramda/src/addIndex'),
  map: require('ramda/src/map')
}
const count = 10000
const dataRamda = () => R.range(0, count)

const maping = (num, idx, array) => {
  return {
    num: num + 1,
    idx: idx + 1,
    sum: num + idx
  }
}

/* Funcional */
export const RamdaMap = (list) => R.addIndex(R.map)(maping, list)