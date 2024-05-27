function allPelletsEaten(game) {
    return game.every(cell => cell !== '.');
  }
  
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
  
  function moveLeft(game) {
    const pacmanIndex = game.indexOf('C');
    if (pacmanIndex > 0) {
      game[pacmanIndex] = '.';
      if (game[pacmanIndex - 1] === '@') {
        score += 10; // Eating fruit
      } else if (game[pacmanIndex - 1] === '.') {
        score += 1; // Eating pellet
      }
      game[pacmanIndex - 1] = 'C';
    }
    console.log("Score:", score);
    if (allPelletsEaten(game)) {
      console.log("Level Completed!");
      game = createGame(game.length);
    }
    return game;
  }
  
  function moveRight(game) {
    const pacmanIndex = game.indexOf('C');
    if (pacmanIndex < game.length - 1) {
      game[pacmanIndex] = '.';
      if (game[pacmanIndex + 1] === '@') {
        score += 10; // Eating fruit
      } else if (game[pacmanIndex + 1] === '.') {
        score += 1; // Eating pellet
      }
      game[pacmanIndex + 1] = 'C';
    }
    console.log("Score:", score);
    if (allPelletsEaten(game)) {
      console.log("Level Completed!");
      game = createGame(game.length);
    }
    return game;
  }
  
  console.log(moveLeft([".", ".", ".", ".", "C", ".", ".", "@", ".", "^"]));
  console.log(moveRight([".", ".", ".", ".", "C", ".", ".", "@", ".", "^"]));
  
  
  
  