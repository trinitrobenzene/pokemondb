import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Default/Footer';
import Header from './components/Default/Header';
import NavBar from './components/Default/NavBar';
import HomePage from './components/Home';
import Pokedex from './components/PokeDex';
import Pokemon from './components/Pokemon';

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:page' element={<Pokedex />} />
                <Route path='/pokedex/:name' element={<Pokemon />} />
			</Routes>

            <Footer />
        </div>
    );
}

export default App;
