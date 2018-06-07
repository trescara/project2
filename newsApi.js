const url = "https://newsapi.org/v2/everything?q=bitcoin?apiKey=93b2bb6250ce4c18b629090d07687f20"

export async function getNews() {
  let result = fetch(url).then(response => response.json());
  return results.articles;
}