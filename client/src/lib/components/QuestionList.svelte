<script>
  import QuestionItem from "./QuestionItem.svelte";
  import { PUBLIC_API_URL } from "$env/static/public";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let questions = writable([]);

  const fetchQuestions = async () => {
    const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions`);
    const data = await response.json();
    questions.set(data);
  };

  onMount(() => {
    fetchQuestions();
    const interval = setInterval(fetchQuestions, 5000);
    return () => clearInterval(interval);
  });

  setContext("questions", questions);

</script>

<ul>
  {#each $questions as question}
    <li>
      <QuestionItem {question} />
    </li>
  {/each}
</ul>