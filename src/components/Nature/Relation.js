import React, { useEffect, useState } from 'react';
import { capitalFirstLetter, upperFirst } from '../Support';

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
                increasing: n.increased_stat
                    ? n.increased_stat.name
                    : 'none',
                decreasing: n.decreased_stat
                    ? n.decreased_stat.name
                    : 'none',
            };
        })
        beta.sort((x,y) => x.name.localeCompare(y.name));
        beta.sort((x, y) => x.increasing.localeCompare(y.increasing));

        setNature(beta);
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/nature/?offset=0&limit=25')
            .then((res) => res.json())
            .then((data) => handleData(data.results.map((_) => _.url)));
    }, []);

    nature && nature.length && console.log(nature);

    return (
        <div>
            {nature.length && (
                <table className="infor-table">
                    <thead className="bg-stone-200">
                        <tr>
                            <th>Nature</th>
                            <th className='bg-g'>Increases</th>
                            <th>Decreases</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {nature.map((n) => (
                                <tr className="border-td hover:bg-rose-50" key={n.name}>
                                    <td className="text-base font-bold">
                                        {upperFirst(n.name)}
                                    </td>
                                    <td>
                                        {capitalFirstLetter(
                                            n.increasing
                                        ).replace('ecial ', '.')}
                                    </td>
                                    <td>
                                        {capitalFirstLetter(
                                            n.decreasing
                                        ).replace('ecial ', '.')}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Relation;
