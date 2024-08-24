// List of items to search
const list = ["apple", "banana", "cherry"];

// Create a new Fuse instance
const fuse = new Fuse(list, { includeScore: true });

// Handle search input
document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value;
    const results = fuse.search(query);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results.map(result => `<p>${result.item} (score: ${result.score.toFixed(2)})</p>`).join('');
});
