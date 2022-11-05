function createGame(player1, hour, player2) {
  return `
  <li>
    <figure>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
      <figcaption>${player1}</figcaption>
    </figure>
     <strong>${hour}</strong>
    <figure>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
      <figcaption>${player2}</figcaption>
    </figure>
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
  
    createCard("23/11", "quarta", createGame("alemanha", "10:00", "japão")) +
    createCard("27/11", "domingo", createGame("espanha", "16:00", "alemanha")) +
    createCard("01/12", "quinta", createGame("costa-rica", "16:00", "alemanha"))