import React from 'react'
import ActorsCard from './ActorsCard'

const ActorsGrid = ({ actors }) => {
    return (
        <>
            {actors.map(data => (
                <ActorsCard
                    key={data.person.id}
                    name={data.person.name}
                    country={data.person.country ? data.person.country.name : null}
                    birthday={data.person.birthday}
                    gender={data.person.gender}
                    image={data.person.image ? data.person.image.medium : '/img-placeholder.png'}
                />
            ))}
        </>
    )
}

export default ActorsGrid