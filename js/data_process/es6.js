const data = require('../data').data
function fetchData() {
  return Promise.resolve(data)
}

export const getIncompleteTaskSummariesForMember_functional = (memberName) => fetchData()
  .then((data) => data.tasks)
  .then((tasks) => tasks.filter((item) => item.member === memberName))
  .then((tasks) => tasks.filter((item) => !item.complete))
  .then((tasks) => tasks.map((item) => ({
      id: item.id,
      dueDate: item.dueDate,
      title: item.title,
      priority: item.priority
    }))
  )
  .then((tasks) => tasks.sort((first, second) => {
      return first.dueDate - second.dueDate
    })
  )