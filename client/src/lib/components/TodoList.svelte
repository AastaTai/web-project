<script>
  import { useTodoState } from "$lib/states/todoState.svelte.js";
  import TodoItem from "./TodoItem.svelte";

  let todoState = useTodoState();
</script>

<ul class="space-y-4">
  {#each todoState.todos as todo}
    <li>
      <TodoItem {todo} />
    </li>
  {/each}
</ul>
