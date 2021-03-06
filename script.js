const container = document.querySelector(".container");
const games = [
	{ id: 324, name: "Great game", rating: 5.0 },
	{ id: 124, name: "Ok game", rating: 3.0 },
	{ id: 678, name: "Meh game", rating: 2.5 },
	{ id: 28, name: "Terrible game", rating: 1.0 },
	{ id: 4, name: "Mediocre game", rating: 3.0 },
];

games.forEach(function (game) {
	container.innerHTML += `
	<div class="inner-container">
	<h4>Name: ${game.name}</h4> 
	<p>Rating: ${game.rating}</p>
	</div>`;
});

// You have to querySelectorAll AFTER you render the html, or else the "h4" tag does not exist yet
const oneGame = document.querySelectorAll("h4");

oneGame.forEach(function (game) {
	game.addEventListener("click", toggleClass);
});

function toggleClass(event) {
	event.target.classList.toggle("played");
}
