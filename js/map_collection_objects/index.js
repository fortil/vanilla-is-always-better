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
/* MAP Object */
var count = 1000
var dataFn = () => (new Array(count).fill(undefined)).map((i, idx) => ({ i: idx + 1 }))
var dataIm = () => {
  var data = []
  for (var i = 0; i < count; i++) {
    data.push({ i: i + 1 })
  }
  return data
}
var dataRamda = () => R.map((i) => ({ i: i + 1 }), R.range(0, count))
var dataLodash = () => _.map(_.range(0, count), (i) => ({ i: i + 1 }))
var dataLodashFP = () => _FP.map((i) => ({ i: i + 1 }))(_FP.range(0, count))

var maping = (num) => num * num

/* Imperativo */
var NativeImperativeMap = (data) => {
  for (var i = 0; i < data.length; i++) {
    var keys = Object.keys(data[i])
    for (var e = 0; e < keys.length; e++) {
      data[i][keys[e]] = maping(data[i][keys[e]])
    }
  }
  return data
}

/* Funcional */
var NativeFunctionalMap = (list) => {
  return list.map((item, idx, array) => {
    return Object.keys(item).reduce((prev, current) => {
      prev[current] = maping(item[current])
      return prev
    }, {})
  })
}

/* Ramda */
var RamdaMap = R.map((item) => R.map(maping, item))

/* Lodash FP */
var LodashFPMap = _FP.map((item) => _FP.mapValues(maping, item))

/* Lodash */
var LodashMap = (list) => _.map(list, (item) => _.mapValues(item, maping))
