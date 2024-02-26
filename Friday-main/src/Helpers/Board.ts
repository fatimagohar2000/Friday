import { Board } from "johnny-five"

const board = new Board()

// Resetting the board
board.on("ready", () => {for (let i = 1; i < 14; i++) board.digitalWrite(i, 1)})

export default board