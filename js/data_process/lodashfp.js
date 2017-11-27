const _FP = {
  flow: require('lodash/fp/flow'),
  property: require('lodash/fp/property'),
  filter: require('lodash/fp/filter'),
  reject: require('lodash/fp/reject'),
  map: require('lodash/fp/map'),
  pick: require('lodash/fp/pick'),
  sortBy: require('lodash/fp/sortBy')
}
const data = require('../data').data
function fetchData() {
  return Promise.resolve(data)
}

var getIncompleteTaskSummariesForMember_LodashFn = (memberName) => fetchData()
  .then(
    _FP.flow([
      _FP.property('tasks'),
      _FP.filter((item) => item.member === memberName),
      _FP.reject((item) => item.complete),
      _FP.map(_FP.pick(['id', 'dueDate', 'title', 'priority'])),
      _FP.sortBy(_FP.property('dueDate'))
    ])
  )
