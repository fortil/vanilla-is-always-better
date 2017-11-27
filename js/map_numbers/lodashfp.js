const _FP = {
  range: require('lodash/fp/range'),
  map: require('lodash/fp/map')
}
var count = 10000
var dataLodashFP = () => _FP.range(0, count)

var maping = (num, idx, array) => {
  return {
    num: num + 1,
    idx: idx + 1,
    sum: num + idx
  }
}

/* Funcional */
export const LodashFPMap = _FP.map(maping)