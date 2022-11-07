function createGame(player1, hour, player2) {
  return `<li>
                <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
                <strong>${hour}</strong>
                <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
              </li>`
}
function criarCard(date, day, games) {
  return `
  <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
          </div>
  `
}
document.querySelector("#app").innerHTML = `
<header>
          <img src="./assets/logo.svg" alt="Logo da NLW" />
        </header>
        <main id="cards">
        ${criarCard(
          "02/12",
          "quinta",
          createGame("brazil", "16:00", "cameroon") +
            createGame("brazil", "16:00", "british")
        )}
        ${criarCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
        ${criarCard("26/11", "sábado", createGame("brazil", "16:00", "serbia"))}
        </main>
`
