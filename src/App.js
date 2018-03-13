import React, { Component } from 'react';
import Ratings from './components/hocRatings';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>TF React Ratings Demo</h2>
                <Ratings size="l" />
            </div>
        );
  }
}

export default App;
