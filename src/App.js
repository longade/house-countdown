import './App.css';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>Now you can enter the house!</span>;

function App() {
  return (
    <div className="App">
      <div class="wordart italic-outline">
        <Countdown date={new Date(2022, 3, 21, 19, 30)}>
          <Completionist />
        </Countdown>
      </div>
    </div>
  );
}

export default App;
