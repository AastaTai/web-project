<script>
  import * as jokeApi from "$lib/apis/joke-api.js";

  let jokes = $state([]);
  let loading = $state(true);

  const loadJokes = async () => {
    loading = true;
    jokes = await jokeApi.getJokes();
    loading = false;
  };


</script>

<button onclick={loadJokes}>Load joke</button>
<br/>
<p>Joke:</p>
{#if loading}
  <p>Loading a joke...</p>
{:else}
  <p>{jokes.setup}</p>
  <p>{jokes.punchline}</p>
{/if}
