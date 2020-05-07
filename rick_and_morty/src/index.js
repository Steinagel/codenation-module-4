const URL = "https://rickandmortyapi.com/api/character/";
let data = [];

async function getData() {
  const results = await fetch(URL)
    .then((r) => r.json())
    .then((json) => json.results);
  return results;
}
