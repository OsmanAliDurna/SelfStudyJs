import { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
      {isVisible && <ClassComponent />}
      {isVisible ? <FunctionalComponent /> : null}
    </div>
  );
}

export default App;
