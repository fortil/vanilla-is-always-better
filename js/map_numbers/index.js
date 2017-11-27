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
/* MAP */
var count = 10000
var dataFn = () => (new Array(count).fill(undefined)).map((i, idx) => idx)
var dataIm = () => {
  var data = []
  var i = 0
  while (i < count) {
    data.push(i)
    i++
  }
  return data
}
var dataRamda = () => R.range(0, count)
var dataLodash = () => _.range(0, count)
var dataLodashFP = () => _FP.range(0, count)

var maping = (num, idx, array) => {
  return {
    num: num + 1,
    idx: idx + 1,
    sum: num + idx
  }
}

/* Imperativo */
var NativeImperativeMap = () => {
  var data = dataIm()
  for (var i = 0; i < data.length; i++) {
    data[i] = {
    	num: data[i] + 1,
      idx: i + 1,
      sum: data[i] + i
    }
  }
  return data
}

/* Funcional */
var NativeFunctionalMap = () => dataFn().map(maping)

/* Ramda Curry */
var RamdaCurryMap = R.addIndex(R.map)(maping)

/* Ramda */
var RamdaMap = (list) => R.addIndex(R.map)(maping, list)

/* Lodash FP */
var LodashFPMap = _FP.map(maping)

/* Lodash */
var LodashMap = (list) => _.map(list, maping)