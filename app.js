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
      this.privateAttack(3, 10);
    },
    specialAttack: function() {
      this.privateAttack(10, 20);
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }

      this.monsterAttack();
    },
    giveUp: function() {},
    getDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    monsterAttack: function() {
      this.playerHealth -= this.getDamage(5, 12);
      this.checkWin();
    },
    privateAttack: function(min, max) {
      this.monsterHealth -= this.getDamage(min, max);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    }
  }
});
