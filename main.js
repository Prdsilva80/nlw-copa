function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
  `
}


let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="anination-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  
    createCard("23/11", "quarta", createGame("germany", "10:00", "japan")) +
    createCard("27/11", "domingo", createGame("spain", "16:00", "germany")) +
    createCard("01/12", "quinta", createGame("costa-rica", "16:00", "germany"))