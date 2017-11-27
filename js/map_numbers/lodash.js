const _ = {
  range: require('lodash/range'),
  map: require('lodash/map')
}
const count = 10000
const dataLodash = () => _.range(0, count)

const maping = (num, idx, array) => {
  return {
    num: num + 1,
    idx: idx + 1,
    sum: num + idx
  }
}

/* Funcional */
export const LodashMap = (list) => _.map(list, maping)