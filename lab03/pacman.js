function createGame(n) {
    let gameBoard = new Array(n).fill('.');
    const pacmanIndex = Math.floor(Math.random() * n);
    let ghostIndex = Math.floor(Math.random() * n);
    let fruitIndex = Math.floor(Math.random() * n);
  
    while (ghostIndex === pacmanIndex) {
      ghostIndex = Math.floor(Math.random() * n);
    }
  
    while (fruitIndex === pacmanIndex || fruitIndex === ghostIndex) {
      fruitIndex = Math.floor(Math.random() * n);
    }
  
    gameBoard[pacmanIndex] = 'C';
    gameBoard[ghostIndex] = '^';
    gameBoard[fruitIndex] = '@';
  
    return gameBoard;
  }
  
  