<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  import { getContext } from "svelte";

  export let question;
  let questions = getContext("questions");

  const deleteQuestion = async (id) => {
    const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      questions.update(qs => qs.filter(q => q.id !== id));
    }
  };

  const upvoteQuestion = async (id) => {
    const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions/${id}/upvote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ upvotes: question.upvotes + 1 })
    });

    if (response.ok) {
      questions.update(qs => {
        const q = qs.find(q => q.id === id);
        q.upvotes += 1;
        return [...qs];
      });
    }
  };
</script>


<label for={question.id}>
  title: {question.title}
</label>

<button onclick={deleteQuestion(question.id)}>Delete</button>

<button onclick={upvoteQuestion(question.id)}>Upvote</button>

<label for={question.id}>
  Upvotes: {question.upvotes}
</label>