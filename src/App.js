import React, { Component } from 'react';
import Main from './components/MainComponent';
import './styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className="App">
              <Main/>
            </div>
        );
    }
}

export default App;