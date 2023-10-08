import './App.css';
import BannerComponent from './components/BannerComponent';
import ExhibitComponent from './components/ExhibitComponent';

function App() {
  return (
    <div className="App">
      <BannerComponent />
      <ExhibitComponent>
        <p>content of the exhibit</p>
      </ExhibitComponent>
    </div>
  );
}

export default App;
