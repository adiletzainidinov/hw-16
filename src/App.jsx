import './App.css';
import Timer from './components/UseTaimer';
import Counter from './components/counter/Counter';
import UseInput from './components/useInput/UseInput';

function App() {
  return (
    <>
      <div>
        <Counter />
        <UseInput />
        <Timer initialMinutes={1} />
      </div>
    </>
  );
}

export default App;
