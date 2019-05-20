import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {

    state = {
        module: '',
    }

    render() {
        return (
            <div className="App">
                <div className="menu">
                    <h1>Aprendiendo Suspense - Lazy</h1>
                    <p>Este ejemplo simple muestra cómo se realiza la carga tardía de dos módulos
                        diferentes</p>
                    <button
                        onClick={() => {
                        this.setState({module: 'A'})
                    }}>Módulo A</button>
                    <button
                        onClick={() => {
                        this.setState({module: 'B'})
                    }}>Módulo B</button>
                </div>
                {
                  <Home module={this.state.module} /> 
                  /*<HomeStatic module={this.state.module} />*/
                }
            </div>
        );
    }
}

export default App;
