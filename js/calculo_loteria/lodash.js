const _ = {
  isEqual: require('lodash/isEqual'),
  subtract: require('lodash/subtract'),
  multiply: require('lodash/multiply')
}

export const LodashOdds = (n, p, acc) => _.isEqual(n, 0) ? acc : LodashOdds(_.subtract(n, 1), _.subtract(p, 1), _.multiply(n / p, acc))