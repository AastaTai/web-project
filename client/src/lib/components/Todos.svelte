<script>
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
</script>

<header class="bg-primary-100 p-4 mb-6">
  <h1 class="text-xl text-primary-900">Todos</h1>
</header>

<main>
  <h2 class="text-lg text-primary-900">Add Todo</h2>

  <TodoForm />

  <h2 class="text-lg text-primary-900">Existing todos</h2>

  <TodoList />
</main>
