var check_states = [false, false, false, false, false];
const songs = ['Take 5', 'A Night in Tunisia', 'The Girl from Ipanema', 'Fly Me To The Moon', 'Maple Leaf Rag']
const checks_id = ["chk1", "chk2", "chk3", "chk4", "chk5"];

function add_choice(choice) {
	 if (!check_states[choice]) {
		  for (let i = 0; i < checks_id.length; i++) {
				check_states[i] = false
				document.getElementById(checks_id[i]).checked = false;
		  }

		  check_states[choice] = true;
		  document.getElementById(checks_id[choice]).checked = true;

		  document.songForm.label.value = "Review for " + songs[choice];

		  document.songForm.label.style.display = "block";
		  document.songForm.response.style.display = "block";
		  document.songForm.reset.style.display = "block";
		  document.songForm.submit.style.display =  "block";
	 } 
	 else {
		  check_states[choice] = false;

		  document.songForm.label.style.display = "none";
		  document.songForm.response.style.display = "none";
		  document.songForm.reset.style.display = "none";
		  document.songForm.submit.style.display = "none";
	 }
}

function my_reset(e) {
	 e.preventDefault();

	 for (let i = 0; i < checks_id.length; i++) {
		  check_states[i] = false
		  document.getElementById(checks_id[i]).checked = false;
	 }

	 document.songForm.response.value = "";

	 document.songForm.label.style.display = "none";
	 document.songForm.response.style.display = "none";
	 document.songForm.reset.style.display = "none";
	 document.songForm.submit.style.display = "none";
}