import React from 'react';
import { useSelector } from 'react-redux';
import { TbSwords, TbShield } from 'react-icons/tb';
import { upperFirst } from '../../Support';
import { TypeBtn } from '../Overview';
import LoadingSkeleton from '../../Loading';

const Relationship = ({ props }) => {
    const { content, list } = props;
    return list.length ? (
        <div className="py-2">
            <p>{content}</p>
            <div className="flex gap-3 mt-2 flex-wrap">
                {list.map((type, i) => (
                    <TypeBtn key={i} name={type.name} />
                ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

const RelationsType = () => {
    const { dameRelations, name } = useSelector((state) => state.Type);
    return (
        <>
            {dameRelations ? (
                <div className="py-8 md:grid md:grid-cols-2 gap-12">
                    <div className="col-span-1">
                        <h3 className="sub-title">
                            <TbShield className="inline mr-4" />
                            Resistance ability
                        </h3>
                        <Relationship
                            props={{
                                content: `These types are super-effective against ${upperFirst(
                                    name
                                )}:`,
                                list: dameRelations.double_damage_from,
                            }}
                        />
                        <Relationship
                            props={{
                                content: `These types are not very effective against ${upperFirst(
                                    name
                                )} Pokémon:`,
                                list: dameRelations.half_damage_from,
                            }}
                        />
                        <Relationship
                            props={{
                                content: `These types have no effect on ${upperFirst(
                                    name
                                )} Pokémon:`,
                                list: dameRelations.no_damage_from,
                            }}
                        />
                    </div>
                    <div className="col-span-1 mt-8 md:mt-0">
                        <h3 className="sub-title">
                            <TbSwords className="inline mr-4" />
                            Attack ability
                        </h3>
                        <Relationship
                            props={{
                                content: `${upperFirst(
                                    name
                                )} moves are super-effective against: `,
                                list: dameRelations.double_damage_to,
                            }}
                        />
                        <Relationship
                            props={{
                                content: `${upperFirst(
                                    name
                                )} moves are not very effective against:`,
                                list: dameRelations.half_damage_to,
                            }}
                        />
                        <Relationship
                            props={{
                                content: `${upperFirst(
                                    name
                                )} moves have no effect on:`,
                                list: dameRelations.no_damage_to,
                            }}
                        />
                    </div>
                </div>
            ) : <Loading />}
        </>
    );
};

const Loading = () => {
    return (
        <div className="py-8 md:grid md:grid-cols-2 gap-12">
            <div className="col-span-1">
                <h3 className="sub-title">
                    <TbShield className="inline mr-4" />
                    Resistance ability
                </h3>
                <LoadingSkeleton className="my-2 h-[80px]" />
                <LoadingSkeleton className="my-2 h-[80px]" />
                <LoadingSkeleton className="my-2 h-[80px]" />
            </div>
            <div className="col-span-1 mt-8 md:mt-0">
                <h3 className="sub-title">
                    <TbSwords className="inline mr-4" />
                    Attack ability
                </h3>
                <LoadingSkeleton className="my-2 h-[80px]" />
                <LoadingSkeleton className="my-2 h-[80px]" />
                <LoadingSkeleton className="my-2 h-[80px]" />
            </div>
        </div>
    );
};

RelationsType.Loading = Loading;

export default React.memo(RelationsType);
