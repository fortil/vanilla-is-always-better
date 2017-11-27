const R = {
  pipe: require('ramda/src/pipe'),
  prop: require('ramda/src/prop'),
  filter: require('ramda/src/filter'),
  reject: require('ramda/src/reject'),
  map: require('ramda/src/map'),
  pick: require('ramda/src/pick'),
  sortBy: require('ramda/src/sortBy')
}
const data = require('../data').data
function fetchData() {
  return Promise.resolve(data)
}

export const getIncompleteTaskSummariesForMember_Ramda = (memberName) => fetchData()
  .then(
    R.pipe(
      R.prop('tasks'),
      R.filter((item) => item.member === memberName),
      R.reject((item) => item.complete),
      R.map(R.pick(['id', 'dueDate', 'title', 'priority'])),
      R.sortBy(R.prop('dueDate')),
    )
  )