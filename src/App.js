import React, { Component } from 'react';
import Main from './components/MainComponent';
import './styles/style.scss'
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <Main />
            </div>
        </Router>
        );
    }
}

export default App;