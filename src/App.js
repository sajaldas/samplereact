import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import configureStore from "./redux/store/configureStore";
import { Provider } from 'react-redux'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
