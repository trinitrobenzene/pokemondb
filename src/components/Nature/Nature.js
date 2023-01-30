import React from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { capitalFirstLetter, upperFirst } from '../Support';
import LoadingSkeleton from '../Loading';

const Nature = ({ nature }) => {
    const toRightFormat = (input) => {
        if (input.includes('special-')) {
            if (input.includes('attack'))
                input = input.replace('attack', 'atk');
            else if (input.includes('defense'))
                input = input.replace('defense', 'def');
        }
        return capitalFirstLetter(input).replace('ecial ', '.');
    };
    return (
        <>
            <table className="infor-table">
                <thead className="bg-stone-200">
                    <tr>
                        <th>Nature</th>
                        <th className="bg-g">Increases</th>
                        <th>Decreases</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {nature.map((n) => (
                        <tr className="border-td hover:bg-rose-50" key={n.name}>
                            <td className="text-base font-bold">
                                {upperFirst(n.name)}
                            </td>
                            <td className="relative text-sm md:text-base">
                                <BsArrowUpCircle
                                    className="my-auto left-2 absolute inline text-green-600 pr-2"
                                    size="24"
                                />
                                <span className='md:pl-2'>{toRightFormat(n.increasing)}</span>
                            </td>
                            <td className="relative text-sm md:text-base">
                                <BsArrowDownCircle
                                    className="my-auto left-2 absolute inline text-red-600 pr-2"
                                    size="24"
                                />
                                <span className='md:pl-2'>{toRightFormat(n.decreasing)}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

const Loading = () => {
    return (
        <table className="infor-table table-fixed">
            <thead className="bg-stone-200">
                <tr>
                    <th>Nature</th>
                    <th className="bg-g">Increases</th>
                    <th>Decreases</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                        <td className="text-base font-bold">
                            <LoadingSkeleton className="w-[120px] h-[36px] m-1 rounded" />
                        </td>
                        <td className="relative">
                            <LoadingSkeleton className="w-[120px] h-[36px] m-1 rounded" />
                        </td>
                        <td className="relative">
                            <LoadingSkeleton className="w-[120px] h-[36px] m-1 rounded" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Nature.Loading = Loading;

export default Nature;
