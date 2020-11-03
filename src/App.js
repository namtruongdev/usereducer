import { useReducer } from 'react';

import { reducer, initState } from './store/reducers/countReducer';
import { increment, decrement } from './store/actions/countAction';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="app">
      <p>{state.count}</p>
      <button onClick={() => dispatch(increment)}>Increment</button>
      <button onClick={() => dispatch(decrement)}>Decrement</button>
    </div>
  );
}

export default App;
