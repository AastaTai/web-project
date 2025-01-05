<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  import { page } from '$app/stores';

  let { data } = $props();
  let todo = null;
  let error = "No such todo";

  const getTodo = async () => {
    const id = $page.params.todo;
    console.log(id);
    const response = await fetch(`${PUBLIC_API_URL}/api/todos/${id}`);
    todo = await response.json();
  };

  $effect(() => {
    getTodo();
  });
</script>

<p>{todo ? `${todo.name}` : error}</p>