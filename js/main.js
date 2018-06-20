const countdown = document.querySelector(".countDown");

//launch date
const launchDate = new Date("July 18, 2018 13:00:00").getTime();

//update second
const interval = setInterval(() => {
	//today's date and time in ms
	const now = new Date().getTime();

	//difference between now and launch date
	const diff = launchDate - now;
	// console.log(diff);

	//Time calculation
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((diff % (1000 * 60)) / 1000);

	//Display
	countdown.innerHTML = `
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${mins}<span>Minutes</span></div>
		<div>${secs}<span>Seconds</span></div>
	`;

	//If date passed
	if (diff < 0) {
		clearInterval(interval);
		countdown.style.color = "#ffb6c1";
		countdown.innerHTML = "Launched";
	}
}, 1000);
