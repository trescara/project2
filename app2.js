fetch("./newsApi")
 .then(response => response.json())
  .then(json => console.log(json));
