const container = document.querySelector(".container");
const items = document.querySelectorAll("h4");
const games = [
	{ id: 324, name: "Great game", rating: 5.0 },
	{ id: 124, name: "Ok game", rating: 3.0 },
	{ id: 678, name: "Meh game", rating: 2.5 },
	{ id: 28, name: "Terrible game", rating: 1.0 },
	{ id: 4, name: "Mediocre game", rating: 3.0 },
];

games.forEach(function (game) {
	container.innerHTML += `
	<h4>Name: ${game.name}</h4>
	<p>Rating: ${game.rating}</p>
	`;
});

items.forEach(function (item) {
	item.addEventListener("click", toggleClass);
});

function toggleClass(e) {
	event.target.classList.toggle("played");
}

// function toggleClass(event) {
//     event.target.classList.toggle("played");
// }
