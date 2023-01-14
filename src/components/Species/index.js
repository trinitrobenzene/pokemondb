export { default as Breeding } from './Breeding';
export { default as Training } from './Training';
export { default as DexEntries } from './DexEntries';

export const GetDetail = (data) => {
    // console.log(data.genera.find(g => g.language.name === 'en'));
    return {
        baseFriendship: data.base_happiness,
        generation: data.generation,
        growthRate: data.growth_rate.name,
        catchRate: data.capture_rate,
        genera: data.genera.find((g) => g.language.name === 'en'),
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
