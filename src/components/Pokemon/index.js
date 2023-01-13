import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SET_POKEMON } from '../Redux/Action';
import { upperFirst } from '../Support';
import { BaseStats } from './BaseStats';
import './style.css'

const Pokemon = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { pokemon } = useSelector((state) => {
        return state.Pokemon;
    });

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: SET_POKEMON, payload: data }));
    }, [name, dispatch]);

    return (
        <div className="main-width">
            <div className="bg-slate-50 p-8">
				<h2 className="text-center font-bold">{pokemon ? pokemon.name : ""}</h2>
				{pokemon && (
					<>
						<div className='grid grid-cols-3'>
							<div className='col-span-2 py-4'>
								<h3 className='font-bold mb-2'>Pokédex data</h3>
								<div className="flex">
									<img alt={name} src={pokemon.picture.major} className='w-1/2'/>
									<ul className='grow p-6'>
										<li className='py-1 border-gray-300 border-b-2'>National No: {pokemon.id}</li>
										<li className='py-1 border-gray-300 border-b-2'>Type: {pokemon.types.map(t => t.name)}</li>
										<li className='py-1 border-gray-300 border-b-2'>Height: {pokemon.height.slice(0,4)} m</li>
										<li className='py-1 border-gray-300 border-b-2'>Weight: {pokemon.weight}</li>
										<li className='py-1 border-gray-300 border-b-2'>
											{' '}
											Abilities:
											<ol className='list-decimal pl-12'>
												{pokemon.abilities.map((a) => (
													<li key={a.slot}>
														{upperFirst(a.ability.name.replace('-', ' '))}
													</li>
												))}
											</ol>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-span-1'>
								Something like this
							</div>
						</div>
						<div className='grid grid-cols-3'>
							<div>
								<BaseStats stats={pokemon.stats}/>
							</div>
						</div>
					</>
				)}
            </div>
        </div>
    );
};

export default Pokemon;
