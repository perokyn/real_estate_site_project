import React from 'react';
import Main from './components/MainComponent';
import './styles/style.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
export default function App() {
    return (
        <Provider store={store}>
                <Router>
                <div className="App">
                <Main />
                 </div>
                </Router>
    </Provider>
    );
}







// class App extends Component {

//     render() {
//         return (
//             <Router>
//             <div className="App">
//                 <Main />
//             </div>
//         </Router>
//         );
//     }
// }

// export default App;