<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  import { getContext } from "svelte";
  let questions = getContext("questions");


  const addQuestion = async (e) => {
    const question = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    e.preventDefault();

    const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    });

    if (response.ok) {
      questions.update(qs => [...qs, question]);
    }
  };
</script>

<form onsubmit={addQuestion}>
  <label for="title">Question</label>
  <br />
  <input id="title" name="title" type="text" placeholder="Enter a question title" />
  <br />
  <textarea id="text" name="text" type="text" placeholder="Enter a question content" />
  <br />
  <input type="submit" value="Submit" />
</form>