const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const game = {
  cellSize: 30,
  playField: [],
  rowCount: 20,
  columnCount: 10,
  startGame() {
    this.initPlayField();
  },
  initPlayField() {
    const { rowCount, columnCount } = this;

    this.playField = [];
    for (let row = 0; row < rowCount; row++) {
      const tempRow = [];
      for (let col = 0; col < columnCount; col++) {
        tempRow.push(0);
      }
      this.playField.push(tempRow);
    }
  },
};

game.startGame();
console.log(game);
