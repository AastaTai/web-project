const kv = await Deno.openKv();

const getFeedback = async (value) => {
  let result = await kv.get(["feedbacks", value]);
  return result.value ?? 0;
};

const setFeedback = async (value) => {
  const count = await getFeedback(value);
  await kv.set(["feedbacks", value], count + 1);
};

export { getFeedback, setFeedback };
