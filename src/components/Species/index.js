import React, { useEffect, useState } from 'react';
import Breeding from './Breeding';
import Training from './Training';

export const GetDetail = (data) => {
    // console.log(data.genera.find(g => g.language.name === 'en'));
    return {
        baseFriendship: data.base_happiness,
        generation: data.generation,
        growthRate: data.growth_rate.name,
        catchRate: data.capture_rate,
        genera: data.genera.find(g => g.language.name === 'en'),
        genderRate: (data.gender_rate / 8) * 100,
        eggCycles: data.hatch_counter,
        isBaby: data.is_baby,
        isLengend: data['is_legendary'],
        isMythical: data.is_mythical,
        genderDifferent: data.has_gender_differences,
        evolutionChain: data.evolution_chain.url,
        evolvesFromSpecies: data.evolves_from_species,
        varieties: data.varieties,
        pokedexNumber: data.pokedex_numbers,
        entries: data.flavor_text_entries.filter(
            (text) => text.language.name === 'en'
        ),
    };
}

const Species = ({ url }) => {
    const [detail, setDetail] = useState(null);

    const setDetailData = (data) => {
        return {
            baseFriendship: data.base_happiness,
            generation: data.generation,
            growthRate: data.growth_rate.name,
            catchRate: data.capture_rate,
            genera: data.genera.find((g) => g.language === 'en'),
            genderRate: (data.gender_rate / 8) * 100,
            eggCycles: data.hatch_counter,
            isBaby: data.is_baby,
            isLengend: data['is_legendary'],
            isMythical: data.is_mythical,
            genderDifferent: data.has_gender_differences,
            evolutionChain: data.evolution_chain.url,
            evolvesFromSpecies: data.evolves_from_species,
            varieties: data.varieties,
            pokedexNumber: data.pokedex_numbers,
            entries: data.flavor_text_entries.filter(
                (text) => text.language.name === 'en'
            ),
        };
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetail(setDetailData(data)));
    }, []);

    return (
        <div className='px-4'>
            <Training detail={detail} />
            <Breeding detail={detail} />
        </div>
    );
};

export default Species;
