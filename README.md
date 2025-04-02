# Grid Color Game

A simple React-based game where you click boxes in a 3x3 grid to change their colors and watch a sequence unfold!

## How to Play

Welcome to the Grid Color Game! Follow these steps to play:

1. **The Grid**: Start with a 3x3 grid of 9 white boxes.
2. **Click to Turn Green**: Click any white box to turn it green. Each box can only be clicked once—additional clicks on a green box do nothing.
3. **Fill the Grid**: Continue clicking different boxes until all 9 are green.
4. **Orange Sequence**: When you click the last white box (making all 9 green), it turns green, and after a 1-second pause, all boxes turn orange one by one in the order you originally clicked them, with a 2-second delay between each.
5. **Reset and Replay**: Click the "Reset" button below the grid at any time—before, during, or after the sequence—to turn all boxes back to white and start over.

**Goal**: Enjoy clicking the boxes and watching the color sequence! There’s no score—just have fun with the pattern.

## Running the Game

1. Clone this repository: `git clone https://github.com/ankit-nautiyal/Matrix-Game.git`
2. Navigate to the project folder: `cd matrix-game`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser to `http://localhost:5173` (or the port Vite specifies).

Built with React and Vite. No additional frameworks required—just pure CSS and JavaScript!
