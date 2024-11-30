# Tic Tac Toe Game

A simple, responsive Tic Tac Toe game built with **React** and **Vite**. This classic game allows two players to compete on the same device, with a sleek and user-friendly interface.

---

## 🚀 Features

- **Two-Player Mode**: Enjoy the game with a friend on the same screen.
- **Score Tracking**: Keep track of scores across multiple rounds.
- **Game Reset**: Reset the current game without losing the score.
- **New Game**: Start a fresh game with a clean slate.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Styling**: Built with Tailwind CSS for a clean and polished look.

---

## 📂 Project Structure

```plaintext
src/
├── assets/          # Static assets (e.g., images)
├── components/
│   ├── AnnounceWinner.jsx   # Announce winner
│   ├── Board.jsx            # Main game board logic
│   ├── Square.jsx           # Individual square component
│   ├── GameInfo.jsx         # Displays game status and result
│   └── Scoreboard.jsx       # Tracks player scores
├── App.jsx          # Root React component
├── main.jsx         # Entry point for the React app
├── index.css        # Global styles
├── tailwind.config.js # Tailwind CSS configuration
└── ...
```

---

## 🛠️ Built With

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool for web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.

---

## 🖥️ Demo

### Desktop View  
<img src="./src/assets/tic-tac-toe-desktop.jpg" alt="Desktop View" width="600" />

### Mobile View  
<img src="./src/assets/tic-tac-toe-mobile.jpg" alt="Mobile View" width="300" />

---

## 🚧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesaiteja24/tic-tac-toe-react.git
   ```
2. Navigate into the project directory:
   ```bash
   cd tic-tac-toe-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## 🛠️ Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🛡️ How to Play

- Players take turns placing their marks (**X** or **O**) on the grid.
- The first player to align three marks in a row (horizontally, vertically, or diagonally) wins the round.
- If all squares are filled and no player wins, the round ends in a draw.
- Use the "Reset" button to restart the round or "New Game" to reset scores and start fresh.

---

## 🌟 Customization

### Future Enhancements
- AI Mode: Play against the computer with adjustable difficulty levels.
- Themes: Add light and dark themes for better user customization.
- Online Multiplayer: Challenge friends remotely using WebSocket or similar technology.

### Styling
You can customize styles in `index.css` or the Tailwind CSS configuration file.

---

## 🧪 Build for Production

To create an optimized production build:
```bash
npm run build
```
or
```bash
yarn build
```

The build will be available in the `dist` folder.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## 💬 Feedback

If you have any feedback or suggestions, feel free to reach out at [iamsaiteja2411@gmail.com](mailto:iamsaiteja2411@gmail.com) or create an issue on this repository.

---

## 📄 Acknowledgments

- **React** for its incredible library.
- **Vite** for the fast and efficient development experience.
- **Tailwind CSS** for its elegant utility-first design.

---

Let me know if you want further refinements or have specific sections to add! 😊
