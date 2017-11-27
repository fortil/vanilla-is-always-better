const _ = {
  property: require('lodash/property'),
  filter: require('lodash/filter'),
  reject: require('lodash/reject'),
  map: require('lodash/map'),
  sortBy: require('lodash/sortBy')
}
const data = require('../data').data
function fetchData() {
  return Promise.resolve(data)
}

export const getIncompleteTaskSummariesForMember_Lodash = (memberName) => fetchData()
  .then(_.property('tasks'))
  .then((data) => _.filter(data, (item) => item.member === memberName))
  .then((data) => _.reject(data, (item) => item.complete))
  .then((data) => _.map(data, (item) => _.pick(item, ['id', 'dueDate', 'title', 'priority'])))
  .then((data) => _.sortBy(data, _.property('dueDate')))