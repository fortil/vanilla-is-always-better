/* 
Prepare code

<!-- lodash FP -->
<script src='https://cdn.jsdelivr.net/g/lodash@4(lodash.min.js+lodash.fp.min.js)'></script>
<script>
var _FP = _
</script>
<!-- lodash -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" integrity="sha256-8E6QUcFg1KTnpEU8TFGhpTGHw5fJqB9vCms3OhAYLqw=" crossorigin="anonymous"></script>
<!-- ramda -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>
*/
/* Calculo de probabilidad de ganarse una lotería */

/* Imperativo */
var NativeImperativeOdds = (n, p) => {
  var acc = 1
  for (var i = 0; i < n; i++) {
    acc *= (n - i) / (p - i)
  }
  return acc
}

/* Funcional acc init 1 */
var NativeFunctionalOdds = (n, p, acc) => (n === 0) ? acc : NativeFunctionalOdds(n - 1, p - 1, (n / p) * acc)

/* Ramda acc init 1 */
var RamdaOdds = (n, p, acc) => R.ifElse(
  R.equals(0),
  R.always(acc),
  () => RamdaOdds(n - 1, p - 1, R.multiply(acc, n / p))
)(n)

/* Lodash FN acc init 1 */
var LodashOdds = (n, p, acc) => _.isEqual(n, 0) ? acc : LodashOdds(_.subtract(n, 1), _.subtract(p, 1), _.multiply(n / p, acc))

/* Lodash FN acc init 1 */
var LodashFNOdds = (n, p, acc) => _FP.cond([
  [_FP.isEqual(0), _FP.constant(acc)],
  [_FP.stubTrue, () => LodashFNOdds(n - 1, p - 1, _FP.multiply(acc, n / p))]
])(n)
