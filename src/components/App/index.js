import { checkboxGenerator } from '../../utils';
import Playground from '../Playground';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Playground items={checkboxGenerator()} />
    </div>
  );
};

export default App;
