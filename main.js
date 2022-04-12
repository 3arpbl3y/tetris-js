const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const game = {
  cellSize: 30,
  playField: [],

  rowCount: 20, //height
  columnCount: 10, //width

  //figures to play and rotate
  tetrominos: {
    I: [[0, 0, 0, 0], [(1, 1, 1, 1)], [(0, 0, 0, 0)], [(0, 0, 0, 0)]],
    O: [[1, 1], [(1, 1)]],
    S: [[0, 1, 1], [(1, 1, 0)], [(0, 0, 0)]],
    Z: [[1, 1, 0], [(0, 1, 1)], [(0, 0, 0)]],
    L: [[0, 0, 1], [(1, 1, 1)], [(0, 0, 0)]],
    J: [[1, 0, 0], [(1, 1, 1)], [(0, 0, 0)]],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  },
  tetroColor: {
    I: "cyan",
    O: "yellow",
    S: "purple",
    J: "green",
    L: "orange",
    T: "red",
  },
  currentSequence: [],
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
  genSequence() {
 const tetroCount = this.currentSequence.length !== Object.keys(this.tetrominos).length)
  
 const randomName = Math.floor(Math.random()* tet)
  
};

game.startGame();
console.log(game);
