import { Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/Default/ErrorPage';
import Footer from './components/Default/Footer';
import Header from './components/Default/Header';
import NavBar from './components/Default/NavBar';
import HomePage from './components/Home';
import Pokedex from './components/PokeDex';
import National from './components/PokeDex/National';
import Pokemon from './components/Pokemon';
import Type from './components/Type';
import DirectType from './components/Type/DirectType/DirectType';

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/national' element={<National />} />
				<Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokedex/:name' element={<Pokemon />} />
                <Route path='/type' element={<Type />} />
                <Route path='/type/:name' element={<DirectType />} />
                <Route path='*' element={<ErrorPage />}/>
			</Routes>

            <Footer />
        </div>
    );
}

export default App;
