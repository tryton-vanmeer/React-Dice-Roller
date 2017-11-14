import React from 'react';
import Navbar from './Navbar'
import Die from './Die'
import './App.css'

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar />
            <main>
                <Die />
            </main>
        </div>
    );
  }
}

export default App;
