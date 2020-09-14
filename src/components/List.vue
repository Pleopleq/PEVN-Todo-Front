<template>
  <div class="todo-list">
    <h1>{{ msg }}</h1>
    <div class="items" v-for="todo in todos" :key="todo.todo_id">
      <div>{{ todo.description }}</div>
    </div>
  </div>
</template>

<script>
import todoService from "../../services/todos.js";

export default {
  name: "List",
  props: {
    msg: String,
  },
  data: function() {
    return {
      todos: [],
    };
  },
  methods: {
    async getTodos() {
      try {
        const todoList = await todoService.getAll();
        return todoList;
      } catch (err) {
        console.error(err.message);
      }
    },
  },
  mounted() {
    this.getTodos().then((response) => {
      this.todos = response;
    });
  },
};
</script>
