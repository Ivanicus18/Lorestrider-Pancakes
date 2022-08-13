import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About></About>
            </main>
        </div>
    );
}

export default App;
