// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <a
//             className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            🚀 Exciting things are coming! Stay tuned for something amazing! 🎉

//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Enter a number between 1 and 100:");

  const checkGuess = () => {
    const num = parseInt(guess);
    if (num === randomNumber) {
      setMessage("🎉 Congratulations! Aap Jit chuke hai 7 crore");
    } else if (num < randomNumber) {
      setMessage("🔽 Too low! Try again.");
    } else {
      setMessage("🔼 Too high! Try again.");
    }
    setGuess(""); // Clear input after guess
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Animated SVG Logo */}
        <svg
          className="winxtreme-logo"
          width="500"
          height="100"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="40"
            fontWeight="bold"
            fill="white"
            className="glow"
          >
           ABHISHEK: - TESTING purpose......
          </text>
        </svg>

        {/* Exciting Announcement */}
        <p className="exciting-text">
          Welcome to winxtreme...
        </p>

        {/* Guessing Game */}
        <p>{message}</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={checkGuess}>Guess</button>
      </header>
    </div>
  );
}

export default App;
