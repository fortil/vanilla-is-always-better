const _ = {
  cond: require('lodash/fp/cond'),
  isEqual: require('lodash/fp/isEqual'),
  constant: require('lodash/fp/constant'),
  stubTrue: require('lodash/fp/stubTrue'),
  multiply: require('lodash/fp/multiply')
}
export const LodashFNOdds = (n, p, acc) => _.cond([
  [_.isEqual(0), _.constant(acc)],
  [_.stubTrue, () => LodashFNOdds(n - 1, p - 1, _.multiply(acc, n / p))]
])(n)
