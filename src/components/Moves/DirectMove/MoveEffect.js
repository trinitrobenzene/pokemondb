import React from 'react';

const MoveEffect = ({ props }) => {
    // const statsChange = props && props.stat_changes;
    const status = [
        {
            name: 'sleep',
            detail: 'Sleeping Pokémon cannot move (with some exceptions such as Snore). Sleep lasts for 1-3 turns.',
        },
        {
            name: 'burn',
            detail: 'Fire type Pokémon, those with the ability Water Veil or those behind a Substitute cannot be burned.',
        },
        {
            name: 'poison',
            detail: "The affected Pokémon will lose 1/16 of its maximum HP at the end of the first turn, which then increases by 1/16 each turn. In other words, they lose 1/16, 2/16, 3/16, 4/16 and so on. Toxic doesn't affect Pokémon already carrying a major status ailment, Pokémon behind a Substitute nor Poison- or Steel-type Pokémon.",
        },
    ];

    const moreDetail = (change) => {
        if (change.length > 0) 
            return 'Stats can be raised to a maximum of +6 stages each.'
        let res = status.find((s) => s.name === props.meta.ailment.name);
        return res ? res.detail : '';
    };

    return (
        <>
            <h3 className="font-bold mb-2">Effect</h3>
            {props && (
                <div className="text-justify">
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: props.effect_entries.effect }} className='mb-2'/>
                        {moreDetail(props.stat_changes)}
                    </div>
                </div>
            )}
        </>
    );
};

export default MoveEffect;
