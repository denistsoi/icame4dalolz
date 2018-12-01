fetch("https://api.kintohub.com/jokes/", {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQtaWQiOiI2NWM1NDkyYjAwOGE0MDcxOTEzMzQ0YWJmYTRhMjFhOCIsInNlc3Npb24taWQiOiI0Y2QzODBmOC0zNzVkLTRlZDItYjczYy0wYWVkYjNjNTA5NjgiLCJuYmYiOjE1NDM2NDkxMjMsImV4cCI6MTU0NDg1ODcyMywiaWF0IjoxNTQzNjQ5MTIzLCJpc3MiOiJNaWRkbGV3YXJlIiwiYXVkIjoiTWlkZGxld2FyZSJ9.FSKxXGSOAyOAO0hMd9_rvmSn-mQUf2AhY1-dcwL6F-w"
  }
}).then(async response => {
  const data = await response.json();
  
  const jokes = document.createElement("div");
  data.map((item, index) => {
    const joke = document.createTextNode(`${index}: ${item.title} ${item.selftext} \n\n`);
    jokes.appendChild(joke);
  })

  document.body.appendChild(jokes)
});