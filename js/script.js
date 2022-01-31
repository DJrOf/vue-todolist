console.log('VUE OK');

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTasks: '',
        tasks: [
            { text: 'Task 1', done: true},
            { text: 'Task 1', done: false},
            { text: 'Task 1', done: false},
            { text: 'Task 1', done: false},
        ]
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            const newTask = this.newTask.trim();
            if (newTask) {
                this.task.push({ text: newTask, done: false }
                );
        }
        this.newTask = '';
    },

    toggleTaskDone(index) {
        this.tasks[index].done = !this.tasks[index].done;
    },
    deleteAllTasks() {
        this.task = [];
    }
  }
});