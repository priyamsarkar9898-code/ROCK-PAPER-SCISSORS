# 🪨 Rock Paper Scissors ✂️

A simple and interactive **Rock-Paper-Scissors game** built using **HTML, CSS, and JavaScript**.

This is my **first project**, created to practice the fundamentals of web development and JavaScript.

## 🎮 Features

* 🪨 Rock, Paper, and Scissors choices
* 🤖 Computer generates a random choice
* 🏆 Player vs Computer gameplay
* 📊 Live score tracking
* 🤝 Draw detection
* 💬 Displays the result of every round
* 🖱️ Interactive choice buttons with hover effects

## 🛠️ Technologies Used

* **HTML5** - Structure of the game
* **CSS3** - Styling and layout
* **JavaScript** - Game logic and score tracking

## 📂 Project Structure

```text
Rock-Paper-Scissors/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── rock.png
    ├── paper.png
    └── scissors.png
```

## 🕹️ How to Play

1. Open the game in your browser.
2. Choose **Rock**, **Paper**, or **Scissors**.
3. The computer randomly selects its move.
4. The game compares both choices.
5. The winner is displayed on the screen.
6. The score is automatically updated.

### Game Rules

| Player      | Computer    | Result      |
| ----------- | ----------- | ----------- |
| 🪨 Rock     | ✂️ Scissors | Player Wins |
| 📄 Paper    | 🪨 Rock     | Player Wins |
| ✂️ Scissors | 📄 Paper    | Player Wins |
| Same Choice | Same Choice | Draw        |

## ⚙️ How It Works

The computer's choice is generated randomly from three possible options:

```javascript
const options = ["rock", "paper", "scissors"];
```

A random number is generated to select one of these choices.

The game then compares the player's choice with the computer's choice and updates the score accordingly.

## 🚀 Running the Project

No installation or external dependencies are required.

### Option 1: Open Directly

Download or clone the repository and open:

```text
index.html
```

in your web browser.

### Option 2: Use VS Code

1. Open the project folder in **Visual Studio Code**.
2. Open `index.html`.
3. Run it using a browser or the **Live Server** extension.

## 📸 Game Interface

The game provides three interactive choices for the player and displays separate scores for the **Player** and **Computer**.

## 📚 What I Learned

Through this project, I practiced:

* HTML page structure
* CSS styling and positioning
* JavaScript variables
* Functions
* Conditional statements
* Arrays
* Random number generation
* DOM manipulation
* Event listeners
* Basic game logic

The project uses click event listeners to detect the player's selected choice and start each round.

## 🔮 Future Improvements

Possible improvements for future versions:

* 📱 Better mobile responsiveness
* 🔄 Reset game button
* 🏅 Best-of-5 game mode
* 🎨 Improved animations
* 🔊 Sound effects
* 🌙 Dark mode
* 🏆 Winning streak tracking

## 👨‍💻 Author

**Your Name**

This is my first web development project, built as part of my journey to learn programming and web development.

---

⭐ If you like this project, consider giving the repository a star!
