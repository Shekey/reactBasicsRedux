import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './components/iceCreamContainer';
import CakeContainer from './components/cakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
