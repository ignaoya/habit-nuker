import logo from './logo_messi.png';
import HabitList from './habits/habitlist';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          If the <code>Champion</code> is spinning, you are a
        </p>
        <a
          className="App-link"
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Habit Nuker
        </a>
        <HabitList/>
      </header>
    </div>
  );
}

export default App;
