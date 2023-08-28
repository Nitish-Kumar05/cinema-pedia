import React from 'react'
import ActorsCard from './ActorsCard'
import { FlexGrid } from '../common/FlexGrid'

const ActorsGrid = ({ actors }) => {
    return (
        <FlexGrid>
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
        </FlexGrid>
    )
}

export default ActorsGrid