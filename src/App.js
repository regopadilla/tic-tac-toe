import './App.css';
import Board from './page/Board'

function App() {
  return (
    <div className="App">
      <div className="titleWrapper">
        Tic-Tac-Toe
      </div>

      <div className="boardWrapper">
        <Board/>
      </div>

    </div>
  );
}

export default App;
