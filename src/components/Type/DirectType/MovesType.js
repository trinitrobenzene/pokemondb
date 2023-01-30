import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuickView from '../../Moves/AllMove/Quickview';
import { hanleData } from '../../Moves/DirectMove';

const MovesType = () => {
    const { moves } = useSelector((state) => state.Type);
    const [movelist, setMovelist] = useState([]);

    const getData = async (urls) => {
        const data = await Promise.all(urls.map((url) => fetch(url))).then(
            (resp) => Promise.all(resp.map((r) => r.json()))
        );
        // console.clear()
        setMovelist(data.map((d) => hanleData(d)));
    }

    useEffect(() => {
        getData(moves.map(m => m.url))
    }, [moves]);

    return (
        <div className="py-8">
            {movelist.length && <QuickView moves={movelist} />}
        </div>
    );
};

export default React.memo(MovesType);
