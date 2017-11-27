/* 

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
function fetchData() {
  return Promise.resolve(data)
}
/* Imperativo */
var getIncompleteTaskSummariesForMember_imperative = (memberName) => {
  return fetchData()
    .then((data) => {
      return data.tasks
    })
    .then((tasks) => {
      var results = []
      for (var i = 0, len = tasks.length; i < len; i++) {
        if (tasks[i].member === memberName) {
          results.push(tasks[i])
        }
      }
      return results
    })
    .then((tasks) => {
      var results = []
      for (var i = 0, len = tasks.length; i < len; i++) {
        if (!tasks[i].complete) {
          results.push(tasks[i])
        }
      }
      return results
    })
    .then((tasks) => {
      var results = [], task;
      for (var i = 0, len = tasks.length; i < len; i++) {
        task = tasks[i]
        results.push({
          id: task.id,
          dueDate: task.dueDate,
          title: task.title,
          priority: task.priority
        })
      }
      return results
    })
    .then((tasks) => {
      tasks.sort((first, second) => {
        return first.dueDate - second.dueDate;
      })
      return tasks
    })
}

/* Funcional */
var getIncompleteTaskSummariesForMember_functional = (memberName) => fetchData()
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

/* Ramda */
var getIncompleteTaskSummariesForMember_Ramda = (memberName) => fetchData()
  .then(
    R.pipe(
      R.prop('tasks'),
      R.filter((item) => item.member === memberName),
      R.reject((item) => item.complete),
      R.map(R.pick(['id', 'dueDate', 'title', 'priority'])),
      R.sortBy(R.prop('dueDate')),
    )
  )

/* Lodash FN */
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
/* Lodash */
var getIncompleteTaskSummariesForMember_Lodash = (memberName) => fetchData()
  .then(_.property('tasks'))
  .then((data) => _.filter(data, (item) => item.member === memberName))
  .then((data) => _.reject(data, (item) => item.complete))
  .then((data) => _.map(data, (item) => _.pick(item, ['id', 'dueDate', 'title', 'priority'])))
  .then((data) => _.sortBy(data, _.property('dueDate')))