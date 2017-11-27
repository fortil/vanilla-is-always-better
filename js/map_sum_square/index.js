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
/* Sum Square */
var square = (num) => {
  return num * num
}

/* Imperativo */
var NativeImperativesumOfSquares = (list) => {
  var result = 0
  for (var i = 0; i < list.length; i++) {
    result += square(list[i])
  }
  return result
}

/* Funcional */
var NativeFunctionalsumOfSquares = (list) => list.map(square).reduce((prev, current) => prev + current, 0)

/* Ramda */
var RamdaCurrysumOfSquares = R.pipe(R.map(square), R.reduce(R.add, 0))

/* Lodash FP */
var LodashFPsumOfSquares = _FP.flow([_FP.map(square), _FP.reduce(_.add, 0)])
/* Lodash */
var LodashsumOfSquares = (list) => _.reduce(_.map(square, list), _.add, 0)