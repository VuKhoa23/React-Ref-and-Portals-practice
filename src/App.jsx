import Player from './components/Player.jsx';
import TimerChanllenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChanllenge title='Easy' targetTime={1}/>
        <TimerChanllenge title='Not easy' targetTime={5}/>
        <TimerChanllenge title='Getting tough' targetTime={10}/>
        <TimerChanllenge title='Pros only' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
