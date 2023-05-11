import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ScrollBar from './Components/ScrollBar/ScrollBar';
import TicTac from './Components/tic-tac-toe-game/ticTac';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <ScrollBar/> */}
      <TicTac/>
    </div>
  );
}

export default App;
