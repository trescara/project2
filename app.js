const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('93b2bb6250ce4c18b629090d07687f20');

getNews()
function getNews() {
  fetch(newsUrl + 'top-headlines?country=us')
    .then(function (response) {
      console.log(getNews)
      return response.json()
    })
  fetch()
}
