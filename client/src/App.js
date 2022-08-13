import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
    return (
        <div className="sticky">
            <Header />
            <main className='sticky-content'>
                <About></About>
            </main>
            <Footer />
        </div>
    );
}

export default App;
