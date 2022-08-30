import './App.css';
import Board from './components/board';


function App() {

  return (
    <div className="App">
      {/* <div className='game-area'> */}
      <h2>TİC TAC TOE</h2>
      <hr />
      <Board></Board>
      {/* <div>Oyun sırası: X</div>
      
      <div className='frame'>
      <div className='box box-color-one' onClick={changePlayer}>{player}</div>
      <div className='box box-color-two' >{player}</div>
      <div className='box box-color-one' >{player}</div>
      <div className='box box-color-two' >{player}</div>
      <div className='box box-color-one' >{player}</div>
      <div className='box box-color-two' >{player}</div>
      <div className='box box-color-one' >{player}</div>
      <div className='box box-color-two' >{player}</div>
      <div className='box box-color-one' >{player}</div>
      </div>

      </div> */}
    </div>
  );
}

export default App;

