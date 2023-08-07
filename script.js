class Game {
  constructor() {
      this.choices = ['piedra', 'papel', 'tijera'];
      this.result = document.getElementById('result');
      this.playerNameInput = document.getElementById('playerName');
      this.restoreGame();
  }

  play(playerChoice) {
      const playerName = this.playerNameInput.value.trim();
      if (playerName === '') {
          alert('Por favor, ingresa tu nombre antes de jugar.');
          return;
      }

      const computerChoice = this.getRandomChoice();
      const result = this.calculateResult(playerChoice, computerChoice);
      this.showResult(playerName, playerChoice, computerChoice, result);
      this.saveGame(playerName, playerChoice, computerChoice, result);
  }

  getRandomChoice() {
      const randomIndex = Math.floor(Math.random() * this.choices.length);
      return this.choices[randomIndex];
  }

  calculateResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
          return 'Empate';
      } else if (
          (playerChoice === 'piedra' && computerChoice === 'tijera') ||
          (playerChoice === 'papel' && computerChoice === 'piedra') ||
          (playerChoice === 'tijera' && computerChoice === 'papel')
      ) {
          return 'Ganaste';
      } else {
          return 'Perdiste';
      }
  }

  showResult(playerName, playerChoice, computerChoice, result) {
      this.result.textContent = `${playerName}, elegiste: ${playerChoice}, Computadora eligió: ${computerChoice}. Resultado: ${result}`;
  }

  saveGame(playerName, playerChoice, computerChoice, result) {
      const gameData = {
          playerName,
          playerChoice,
          computerChoice,
          result
      };
      localStorage.setItem('gameData', JSON.stringify(gameData));
  }

  restoreGame() {
      const gameData = JSON.parse(localStorage.getItem('gameData'));
      if (gameData) {
          this.playerNameInput.value = gameData.playerName;
          this.showResult(gameData.playerName, gameData.playerChoice, gameData.computerChoice, gameData.result);
      }
  }
}

const game = new Game();

function play(playerChoice) {
  game.play(playerChoice);
}
