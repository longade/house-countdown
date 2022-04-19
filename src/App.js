import './App.css';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>Now you can enter the house!</span>;

function App() {
  return (
    <div className="App">
      <div class="wordart italic-outline">
        <Countdown date={Date.now() + 5000}>
          <Completionist />
        </Countdown>
      </div>
    </div>
  );
}

export default App;
