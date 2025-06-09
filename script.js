document.getElementById('blagueBtn').addEventListener('click', () => {
  fetch('https://carambar-api-9z2h.onrender.com/api/v1/jokes/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('question').innerText = data.question;
      document.getElementById('answer').innerText = data.answer;
    })
    .catch(error => {
      document.getElementById('question').innerText = "Erreur de chargement.";
      document.getElementById('answer').innerText = error.message;
    });
});
