document.addEventListener('DOMContentLoaded', () => {
    fetchNewQuote();
    
    document.getElementById('new-quote').addEventListener('click', fetchNewQuote);
});

function fetchNewQuote() {
    // Ici, vous récupérerez une citation aléatoire depuis une API ou une liste prédéfinie
    // Pour cet exemple, utilisons une citation statique
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then(response => response.json())
        .then(data => {
            // L'API renvoie un tableau dans 'data', donc nous prenons le premier élément
            const quote = data.data[0];
            // Mise à jour du DOM avec la nouvelle citation et l'auteur
            document.getElementById('text').textContent = `"${quote.quoteText}"`;
            document.getElementById('author').textContent = `- ${quote.quoteAuthor}`;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de la citation:', error);
            // Gestion d'erreur, par exemple afficher un message d'erreur ou une citation de secours
            document.getElementById('text').textContent = "Une erreur s'est produite lors du chargement de la citation.";
            document.getElementById('author').textContent = "";
        });
    }
    
    // Ajout de l'écouteur d'événements au bouton pour charger une nouvelle citation
        document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('new-quote').addEventListener('click', fetchNewQuote);
        // Charger une nouvelle citation immédiatement lorsque la page est prête
        fetchNewQuote();
    });

function updateTweetButton(text, author) {
    const tweetButton = document.getElementById('tweet-quote');
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`;
}