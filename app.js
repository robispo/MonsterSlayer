new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      this.monsterHealth -= this.getDamage(3, 10);

      if (this.monsterHealth <= 0) {
        alert("You won!");
        this.gameIsRunning = false;
        return;
      }

      this.playerHealth -= this.getDamage(5, 12);

      if (this.playerHealth <= 0) {
        alert("You lose!");
        this.gameIsRunning = false;
      }
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
    getDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New game?")) {
          this.startGame();
        }else {
          this.gameIsRunning = false;
        }
        return;
      }
    }
  }
});
