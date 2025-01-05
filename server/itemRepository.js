const kv = await Deno.openKv();

const getItem = async () => {
  const result = await kv.get(["item"]);
  return result.value ?? "Nothing.";
};

const setItem = async (i) => {
  await kv.set(["item"], i);
};

export { getItem, setItem };
