import React, { useEffect, useState } from 'react';
import Nature from './Nature';

function Relation() {
    const [nature, setNature] = useState([]);

    const handleData = async (list) => {
        let alpha = await Promise.all(list.map((url) => fetch(url)))
            .then((resp) => Promise.all(resp.map((r) => r.json())))
            .then((result) => {
                return result;
            });

        let beta = alpha.map((n) => {
            return {
                name: n.name,
                increasing: n.increased_stat ? n.increased_stat.name : 'none',
                decreasing: n.decreased_stat ? n.decreased_stat.name : 'none',
            };
        });
        beta.sort((x, y) => x.name.localeCompare(y.name));
        beta.sort((x, y) => x.increasing.localeCompare(y.increasing));

        setNature(beta);
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/nature/?offset=0&limit=25')
            .then((res) => res.json())
            .then((data) => handleData(data.results.map((_) => _.url)));
    }, []);

    // nature && nature.length && console.log(nature);

    return (
        <div>
            {nature.length > 0 ? (
                <Nature nature={nature}/>
            ): <Nature.Loading />}
        </div>
    );
}

export default Relation;
