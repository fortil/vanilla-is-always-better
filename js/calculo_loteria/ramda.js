const R = {
  ifElse: require('ramda/src/ifElse'),
  equals: require('ramda/src/equals'),
  multiply: require('ramda/src/multiply'),
  always: require('ramda/src/always')
}

export const RamdaOdds = (n, p, acc) => R.ifElse(
  R.equals(0),
  R.always(acc),
  () => RamdaOdds(n - 1, p - 1, R.multiply(acc, n / p))
)(n)