<script>
  import { useTodoState } from "$lib/states/todoState.svelte.js";
  let todoState = useTodoState();

  const addTodo = (e) => {
    const todo = Object.fromEntries(new FormData(e.target));
    todo.id = crypto.randomUUID();
    todoState.add(todo);
    e.target.reset();
    e.preventDefault();
  };
</script>

<form class="space-y-4" onsubmit={addTodo}>
  <label class="label" for="name">
    <span class="label-text">Todo</span>
    <input
      class="input"
      id="name"
      name="name"
      type="text"
      placeholder="Todo name"
    />
  </label>
  
  <label class="flex items-center space-x-2" for="done">
    <input id="done" name="done" type="checkbox" />
    <p>Done</p>
  </label>
  <button class="w-full btn preset-filled-primary-500" type="submit">Add todo</button>
</form>
