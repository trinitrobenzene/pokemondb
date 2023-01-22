import { Routes, Route } from 'react-router-dom';
import './App.css';
import Abilities from './components/Abilities';
import DirectAbility from './components/Abilities/DirectAbility';
import ErrorPage from './components/Default/ErrorPage';
import Footer from './components/Default/Footer';
import Header from './components/Default/Header';
import NavBar from './components/Default/NavBar';
import HomePage from './components/Home';
import Moves from './components/Moves';
import AllMoves from './components/Moves/AllMove';
import DirectMove from './components/Moves/DirectMove';
import Nature from './components/Nature';
import Pokedex from './components/PokeDex';
import National from './components/PokeDex/National';
import Pokemon from './components/Pokemon';
import ScrollToTop from './components/Support/ScrollToTop';
import Type from './components/Type';
import DirectType from './components/Type/DirectType/DirectType';

function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Header />
            <NavBar />
            <Routes onUpdate={() => window.scrollTo(0, 0)}>
                <Route index element={<HomePage />} />
                <Route path="national" element={<National />} />
                <Route path="pokedex" element={<Pokedex />} />
                <Route path="pokedex/:name" element={<Pokemon />} />
                <Route path="type" element={<Type />} />
                <Route path="type/:name" element={<DirectType />} />
                <Route path="move">
                    <Route index element={<Moves />} />
                    <Route path="all" element={<AllMoves />} />
                    <Route path=":name" element={<DirectMove />} />
                </Route>
                <Route path="nature" element={<Nature />} />
                <Route path='ability/' element={<Abilities />} />
                <Route path='ability/:name' element={<DirectAbility />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
